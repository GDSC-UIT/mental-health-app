import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import Button from '@src/components/Button';
import {UserProfileScreenProps} from '@src/navigation/user/type';
import Events from '@src/screens/explore/event/events';
import {Event} from '@src/screens/explore/event/types';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvatarContainer from '../components/AvatarContainer';
import EventCard from '../components/EventCard';

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({navigation}) => {
    const {t} = useTranslation();
    const renderItem = (item: Event) => {
        return <EventCard event={item} key={item.id} />;
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView /*contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(20)}}*/>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() =>
                        navigation.navigate('UserProfile', {
                            screen: 'EditProfile',
                        })
                    }>
                    {<Ionicons name="pencil-outline" size={20} />}
                </TouchableOpacity>

                <AvatarContainer name="Tan Expert" image="" />

                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('Email')}: {'@gmail.com'}
                    </Text>
                </View>

                <Button
                    title="Emotion Diary"
                    style={{
                        width: scaleSize(152),
                        height: scaleSize(40),
                        alignSelf: 'center',
                        marginTop: scaleSize(25),
                    }}
                    textStyle={{color: '#334C78', fontSize: scaleSize(16)}}
                    onPress={() =>
                        navigation.navigate('UserProfile', {
                            screen: 'EmotionDiary',
                        })
                    }
                />

                <View style={{paddingHorizontal: scaleSize(16), marginTop: scaleSize(20)}}>
                    <Text style={styles.activitiesText}>{t('Activities')}</Text>

                    {Events.map(renderItem)}
                </View>

                {/* <Text style={styles.noEventText}>No posts or events</Text> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
    },
    emailDescriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        paddingLeft: scaleSize(15),
        paddingRight: scaleSize(15),
        minHeight: scaleSize(48),
    },
    descriptionText: {
        //thay vì
        // fontFamily: 'Roboto',
        // fontWeight: '500',
        // color: '#334C78',

        //nên vầy
        ...FONTS.body3,
        fontSize: scaleSize(20),
        color: COLORS.dark_blue_2,
    },
    activitiesText: {
        ...FONTS.body3,
        fontSize: scaleSize(20),
        fontFamily: 'Roboto-Medium',
        color: COLORS.dark_gray_2,
    },
    editButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        marginTop: 16,
        marginRight: 16,
        alignSelf: 'flex-end',
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
