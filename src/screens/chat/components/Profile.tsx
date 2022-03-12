import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '@src/assets';
import {COLORS, STYLES, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import {UserProfileScreenProps} from '@src/navigation/expert/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AvatarContainer from '@src/screens/profile/components/AvatarContainer';

const Profile: React.FC = props => {
    const {image, name, email} = {image: 'image', name: 'Dat Dt', email: 'datdt12@gmail.com'};
    const navigation = useNavigation<UserProfileScreenProps['navigation']>();
    const {t} = useTranslation();

    return (
        <>
            <AvatarContainer name="Tan Expert" image="" />
            <Text style={styles.label}>{t('About')}</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Email: {'@gmail.com'}</Text>
            </View>
        </>
    );
};

export default Profile;

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
