import {scaleSize} from '@core/utils';
import {PrivateValueStore} from '@react-navigation/native';
import {IMAGES} from '@src/assets';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import {Header} from '@src/components';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {EditProfileProps} from '@src/navigation/user/type';
import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Image, StyleProp, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EditProfile from '../components/EditProfile';
import {ProfileData} from '../types';

const UserEditProfileScreen: React.FC<EditProfileProps> = ({navigation}) => {
    const {t} = useTranslation();
    const [profile, setProfile] = useState({name: '', avatar: 'https://picsum.photos/id/237/200/300'});
    const [isDirty, setIsDirty] = useState(false);

    function alertLogout() {
        Alert.alert('Notice', 'Are you sure want to log out', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]);
    }

    const onChangeData = (name: string, value: any) => {
        setProfile(prev => ({...prev, [name]: value}));
        setIsDirty(true);
    };

    return (
        <Box container bgColor={COLORS.gray_1} safeArea>
            <Header
                title="Edit Profile"
                canGoBack={navigation.canGoBack()}
                goBack={() => navigation.goBack()}
                headerRight={() => (
                    <Button
                        title="Done"
                        onPress={() => {
                            console.log(profile);
                        }}
                        disabled={!isDirty || !(profile?.avatar || profile?.name)}
                        variant="secondary"
                        style={{paddingHorizontal: scaleSize(12)}}
                    />
                )}
            />
            <EditProfile name="Tan Mot Cu" image="" onChangeData={onChangeData} />
            <TouchableOpacity style={styles.logoutButton} onPress={alertLogout}>
                <Text style={{...FONTS.h2, fontSize: scaleSize(20), color: '#193566'}}>Log Out</Text>
            </TouchableOpacity>
        </Box>
    );
};

export default UserEditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
    },
    aboutLabel: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(20),
        color: '#8F9BB2',
        marginTop: scaleSize(22),
        marginLeft: scaleSize(15),
    },
    logoutButton: {
        width: scaleSize(168),
        height: scaleSize(40),
        borderRadius: 60,
        backgroundColor: '#EBF3FA',
        marginTop: scaleSize(48),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        ...STYLES.deepShadow,
    },
});
