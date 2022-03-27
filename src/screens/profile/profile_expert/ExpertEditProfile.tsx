import {scaleSize} from '@core/utils';
import { useFocusEffect } from '@react-navigation/native';
import userApi from '@src/api/userApi';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import {Box, Header} from '@src/components';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Loading from '@src/components/Loading';
import Neumorph from '@src/components/Neumorph';
import {ExpertStackProps} from '@src/navigation/expert/type';
import {firebaseLogout} from '@src/services/auth';
import {uploadImage} from '@src/services/firebaseStorage';
import {useAppDispatch, useAppSelector} from '@src/store';
import {authActions} from '@src/store/authSlice';
import { User } from '@src/types';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, Text, View} from 'react-native';
import EditProfile from '../components/EditProfile';

const ExpertEditProfileScreen: React.FC<ExpertStackProps<'EditProfile'>> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [profile, setProfile] = useState({
        name: "",
        avatar: "",
        about: "",
        uri: "",
    });
    const [isImageChange, setIsImageChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

    const user = useAppSelector(state => state.auth.user);
    const [reLoad, setReLoad] = useState(false);
    const [loaDing, setLoaDing] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            let mounted = true;
            setLoaDing(true);
            (async () => {
                try {
                    const getUser = await userApi.getProfile(user!.firebase_user_id);
                    //setProFile(getUser);
                    setProfile({name: getUser.name, avatar: getUser.picture!, uri: getUser.picture!, about: getUser.bio})
                    console.log(profile);
                }catch (error) {
                    console.log(error)
                }
                if (mounted) {
                    setLoaDing(false);
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
            setLoaDing(true);
            (async () => {
                try {
                    const getUser = await userApi.getProfile(user!.firebase_user_id);
                    //setProFile(getUser);
                    setProfile({name: getUser.name, avatar: getUser.picture!, uri: getUser.picture!, about: getUser.bio})
                
                    console.log(profile);
                }catch (error) {
                    console.log(error);
                }
                if (mounted) {
                    setLoaDing(false);
                    setReLoad(false);
                }
            })();

            return () => {
                mounted = false;
            };
        }
    }, []);

    function alertLogout() {
        Alert.alert('Notice', 'Are you sure want to log out', [
            {
                text: 'OK',
                onPress: async () => {
                    console.log('check');
                    await firebaseLogout();
                    dispatch(authActions.logout());
                },
            },
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]);
    }

    function alertUpdateSuccess() {
        Alert.alert('Notice', 'Update profile successfully', [
            {
                text: 'OK',
                onPress: async () => {
                    navigation.goBack()
                },
            },
            {text: 'Exit', onPress: () => navigation.goBack()},
        ]);
    }
    console.log(profile);
    const onChangeData = (name: string, value: any) => {
        if (name === 'uri' && value) {
            setIsImageChange(true);
        }
        setProfile(prev => ({...prev, [name]: value}));
        setIsDirty(true);
    };
    const handleSubmit = async () => {
        setLoading(true);
        console.log(profile);
        if (isImageChange && profile.uri) {
            const {url, error} = await uploadImage(profile.uri);

            if (!error && url) {
                setProfile(prev => ({...prev, avatar: url}));

                setIsImageChange(false);
                setIsDirty(false);
                Alert.alert('', 'Update profile successfully');
            } else {
                Alert.alert('Error', error);
            }
        }

        let url = profile.uri;
        if (profile.uri !== profile.avatar) {
            const res = await uploadImage(profile.avatar);
            if (res.error || !res.url) {
                Alert.alert('Notice', res.error);
                setLoading(false);
                return;
            }

            url = res.url;
        }
        
        const newProfile: User = {
            id: user!.id,
            name: profile.name,
            email: user!.email,
            firebase_user_id: user!.firebase_user_id,
            picture: url,
            bio: profile.about,
            is_expert: user!.is_expert,
            created_at: user!.created_at,
            updated_at: user!.updated_at,
            deleted: user!.deleted,
            deleted_at: user!.deleted_at
        }
        
        try {
            console.log("profileeeeeee", newProfile);
            const res = await userApi.updateProfile(newProfile!);
            console.log("after", res);
            setProfile({name: res.name, avatar: res.picture!, uri: res.picture!, about: res.bio})
        } catch (errorApi: any) {
            Alert.alert('Notice', errorApi?.message ?? 'Server Error');
        }
        setLoading(false);
        alertUpdateSuccess();
    };
    return (
        <Box container safeArea bgColor={COLORS.gray_1} loading={loading}>
            <Header
                title="Edit Profile"
                canGoBack={navigation.canGoBack()}
                goBack={() => navigation.goBack()}
                headerRight={() => (
                    <Button
                        title="Done"
                        onPress={handleSubmit}
                        disabled={!isDirty || !(profile?.uri || profile?.name)}
                        variant="secondary"
                        style={{paddingHorizontal: scaleSize(12)}}
                    />
                )}
            />
            <View
                style={{
                    paddingHorizontal: scaleSize(10),
                }}>
                {loaDing ? (
                    <Loading />
                ) : (
                    <>
                        <EditProfile name={profile.name} image={profile.avatar} onChangeData={onChangeData} />
                        <View style={styles.textInputContainer}>
                            <Text style={styles.aboutLabel}>About</Text>
                            <Input defaultValue={profile.about} onChangeText={text => onChangeData('about', text)} />
                        </View>
                        <View style={styles.buttonWrapper}>
                            <Neumorph borderRadius={scaleSize(60)}>
                                <Button
                                    title="Log out"
                                    style={{paddingHorizontal: scaleSize(40)}}
                                    textStyle={{color: COLORS.black_1}}
                                    onPress={() => alertLogout()}
                                />
                            </Neumorph>
                        </View>
                    </>
                )}
            </View>
        </Box>
    );
};

export default ExpertEditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
        paddingHorizontal: scaleSize(10),
    },
    textInputContainer: {
        marginVertical: scaleSize(6),
    },
    aboutLabel: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(20),
        color: '#8F9BB2',
        marginVertical: scaleSize(6),
        marginLeft: scaleSize(4),
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
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSize(30),
    },
});
