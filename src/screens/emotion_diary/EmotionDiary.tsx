import {scaleSize} from '@core/utils';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {UserProfileStackProps} from '@src/navigation/user/type';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import Arrow from './components/Arrow';
import DiaryCard from './components/DiaryCard';
import {diaryList} from './data';
import {useAppSelector} from '@src/store';
import { User, Feel } from '@src/types';
import feelApi from '@src/api/feelApi';
import { Feelings } from '../home/user/feeling';
import Loading from '@src/components/Loading';

type Props = {};

const EmotionDiaryScreen: React.FC = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<UserProfileStackProps<'EmotionDiary'>['navigation']>();
    const [selectedDate, setSelectedDate] = useState<DateData | null>(null);

    const renderArrow = (direction: 'left' | 'right') => <Arrow variant={direction} />;
    const user = useAppSelector(state => state.auth.user);
    const [reLoad, setReLoad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [feel, setFeel] = useState<Feel[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            let mounted = true;
            setLoading(true);
            (async () => {
                try {
                    const res = await feelApi.getUserFeel(user.firebase_user_id)
                    setFeel(res)
                }catch (error) {
                    console.log(error);
                }
                if (mounted) {
                    setLoading(false);
                }
            })();

            return () => {
                mounted = false;
            };
        }, []),
    );
        
    useEffect(() => {
        if (reLoad) {
            let mounted = true;
            setLoading(true);
            (async () => {
                try {
                    const res = await feelApi.getUserFeel(user.firebase_user_id)
                    setFeel(res)
                }catch (error) {
                    console.log(error)
                }
                if (mounted) {
                    setLoading(false);
                    setReLoad(false);
                }
            })();

            return () => {
                mounted = false;
            };
        }
    }, [reLoad]);
    
    return (
        <Box bgColor={COLORS.gray_1} container safeArea={false}>
            <ScrollView style={{paddingHorizontal: scaleSize(10)}} contentContainerStyle={{justifyContent: 'center'}}>
                <View style={{flexDirection: 'row-reverse', marginTop: scaleSize(12)}}>
                    <Button
                        title={t('Dashboard')}
                        onPress={() => navigation.navigate('DashboardEmotionDiary')}
                        textStyle={{color: COLORS.black_1}}
                    />
                </View>
                <Calendar
                    theme={{
                        backgroundColor: COLORS.gray_1,
                        calendarBackground: COLORS.gray_1,
                        todayTextColor: COLORS.black_1,
                        dayTextColor: COLORS.dark_gray_2,
                        textMonthFontWeight: '900',
                        textDayHeaderFontWeight: '900',
                        textDayHeaderFontSize: SIZES.h4,
                    }}
                    minDate={'2022-01-01'}
                    onDayPress={day => {
                        setSelectedDate(day);
                    }}
                    monthFormat={'MMMM yyyy'}
                    firstDay={1}
                    enableSwipeMonths={true}
                    renderArrow={renderArrow}
                    markingType={'custom'}
                    markedDates={
                        selectedDate
                            ? {
                                  [selectedDate.dateString]: {
                                      customStyles: {
                                          container: {
                                              backgroundColor: COLORS.white_2,
                                              elevation: 2,
                                              borderWidth: 1,
                                              borderColor: COLORS.dark_gray_2,
                                          },
                                      },
                                  },
                              }
                            : {}
                    }
                    // displayLoadingIndicator={true}
                    style={styles.calendar}
                />
                {/* <ListDiary data={diaryList} /> */}
                
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {feel.map(diary => (
                            <DiaryCard key={diary.id} time={diary.created_at!} feel={Feelings[diary.feel_id - 1].name} reason={diary.reason}/>
                ))}
                    </>
                )}
            </ScrollView>
        </Box>
    );
};

export default EmotionDiaryScreen;

const styles = StyleSheet.create({
    calendar: {
        marginBottom: scaleSize(10),
        marginTop: scaleSize(20),
        borderRadius: scaleSize(12),
        width: '97.5%',
        alignSelf: 'center',
        ...STYLES.shadow,
    },
});
