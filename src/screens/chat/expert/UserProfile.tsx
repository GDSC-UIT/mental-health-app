import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '@src/assets';
import {COLORS, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {UserProfileScreenProps} from '@src/navigation/expert/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BackButton from '../components/BackButton';

// interface ExpertCardProps {
//     image: string;
//     name: string;
//     email: string;
//     about: string;
// }

const UserProfileScreen: React.FC = props => {
    const {image, name, email, about} = {image: 'image', name: 'Dat Dt', email: 'datdt12@gmail.com', about: 'about'};
    const navigation = useNavigation<UserProfileScreenProps['navigation']>();
    const {t} = useTranslation();

    return (
        <Box bgColor={COLORS.gray_1} container>
            <BackButton />

            <ScrollView>
                <View style={styles.avatarContainer}>
                    <Image
                        // source={{uri: image}}
                        source={IMAGES.user_avatar}
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>Tan Mot Cu</Text>
                </View>

                <Text style={styles.aboutText}>{t('About')}</Text>

                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>Email: {email}</Text>
                </View>

                <Button
                    title="Emotion Diary"
                    style={{marginTop: 25, width: scaleSize(180), height: scaleSize(40), alignSelf: 'center'}}
                    textStyle={{color: COLORS.dark_blue_2}}
                    onPress={() => navigation.push('DashboardEmotionDiary')}
                />
            </ScrollView>
        </Box>
    );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
    avatarContainer: {
        width: scaleSize(232),
        height: scaleSize(160),
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_1,
        alignSelf: 'center',
        marginTop: scaleSize(20),
        ...STYLES.deepShadow,
    },
    profileImage: {
        width: scaleSize(89),
        height: scaleSize(89),
        borderRadius: scaleSize(89) / 2,
        marginTop: scaleSize(13),
        alignSelf: 'center',
    },
    name: {
        fontSize: scaleSize(26),
        fontWeight: 'bold',
        color: COLORS.dark_blue_2,
        alignSelf: 'center',
        marginTop: scaleSize(10),
    },
    aboutText: {
        fontSize: scaleSize(20),
        fontWeight: '500',
        color: COLORS.dark_gray_2,
        marginLeft: scaleSize(16),
        marginTop: scaleSize(30),
    },
    emailDescriptionContainer: {
        width: scaleSize(358),
        height: scaleSize(48),
        borderRadius: scaleSize(60),
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        paddingLeft: scaleSize(15),
    },
    descriptionText: {
        fontSize: scaleSize(20),
        fontWeight: '500',
        color: COLORS.dark_blue_2,
    },
});
