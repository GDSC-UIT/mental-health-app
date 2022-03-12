import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '@src/assets';
import {COLORS, STYLES, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {UserProfileScreenProps} from '@src/navigation/expert/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AvatarContainer from '@src/screens/profile/components/AvatarContainer';
import BackButton from '../components/BackButton';
import Profile from '../components/Profile';

const UserProfileChatScreen: React.FC = props => {
    const navigation = useNavigation<UserProfileScreenProps['navigation']>();
    const {t} = useTranslation();

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <View style={{marginTop: scaleSize(15)}}>
                <BackButton />
            </View>

            <ScrollView>
                <Profile />
                <Button
                    title={t('Emotion Diary')}
                    style={{
                        marginTop: scaleSize(25),
                        width: scaleSize(180),
                        height: scaleSize(40),
                        alignSelf: 'center',
                    }}
                    textStyle={{color: COLORS.dark_blue_2}}
                    onPress={() => navigation.push('DashboardEmotionDiary')}
                />
            </ScrollView>
        </Box>
    );
};

export default UserProfileChatScreen;

const styles = StyleSheet.create({
    descriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: scaleSize(30),
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        paddingHorizontal: scaleSize(15),
        paddingVertical: scaleSize(12),
    },
    descriptionText: {
        ...FONTS.body3,
        color: COLORS.dark_blue_2,
        fontSize: scaleSize(20),
    },
    label: {
        ...FONTS.subtitle3,
        fontSize: scaleSize(20),
        color: COLORS.dark_gray_2,
        marginLeft: scaleSize(16),
        marginTop: scaleSize(28),
    },
});
