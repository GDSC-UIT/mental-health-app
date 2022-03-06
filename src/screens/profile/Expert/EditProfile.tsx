import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import BackButton from '@src/screens/chat/components/BackButton'; //đem ra ngoài compoents chung
import React, { useState } from 'react';
import {Alert, StyleProp, ViewStyle, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

interface EditProfileProps {
    name: string,
    email: string,
    style?: StyleProp<ViewStyle>;
};

const ExpertEditProfile: React.FC<EditProfileProps> = props => {

    const {t} = useTranslation();
    const {name, email, style} = props;

    function arletBack(){
        Alert.alert(
            "Notice", "If you cancel now, your changes will be discarded.",
            [
                {text: "OK", onPress: () => console.log("OK Pressed")},
                {text: "Cancel", onPress: () => console.log("Cancel Pressed")}
            ]
        )
    }

    function arletLogout(){
        Alert.alert(
            "Notice", "Are you sure want to log out",
            [
                {text: "OK", onPress: () => console.log("OK Pressed")},
                {text: "Cancel", onPress: () => console.log("Cancel Pressed")}
            ]
        )
    }
    // const OpenLibrary =() => {
    //     let options = {
    //         title: 'Select Image',
    //         storageOptions: {
    //            skipBackup: true,
    //            path: 'images',
    //         },
    //     };
    //     launchImageLibrary(options, (respone) => {
    //         if(respone.didCancel){
    //             console.log('User cancelled image picker');
    //         }
    //         else if(respone.error){
    //             console.log('Error' + respone.error);
    //         }
    //         else {
    //             let source = respone;
    //             setimgUri(source);
    //             console.log(imgUri);
    //         }
    //     })
    // };
    
    //const [imgUri,setimgUri] = useState({});

    return (
        <SafeAreaView style={styles.container}>                                                                                                     
            <View style={styles.topview}>
                <BackButton/>
                <Text style={styles.profile_text}>{t('Edit Profile')}</Text>
                <TouchableOpacity style={styles.done_button}>
                    <Text style={styles.done_text}>{t('Done')}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.view_img}>
                <View style={styles.img_container}>
                    <Image
                        source={IMAGES.profile}
                        style={{height: 89, width: 89}}    
                    >
                    </Image>
                </View>
                <TouchableOpacity 
                    style={styles.edit_img_button}
                    onPress={() =>{
                        // OpenLibrary();
                    }}>
                        <Text style={styles.edit_img_text}>{t('CHANGE AVATAR')}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.label_name}>{t('Name')}</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.text_input}
                        value={name}
                        placeholder="Edit Name Here"
                    />   
                </View>
                <Text style={styles.label_email}>{t('About')}</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.text_input}
                        value={email}
                        placeholder="Edit About Here"
                    />
                </View>
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.logout_button}
                    onPress={arletLogout}>
                    <Text style={styles.logout_text}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ExpertEditProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
    },

    topview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile_text: {
        fontSize: 26,
        fontFamily: 'Roboto',
        fontWeight: '500',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 21,
        color: '#193566'
    },
    done_button: {
        marginTop: 16,
        alignItems: 'center',
        width: 63,
        height: 40,
        backgroundColor: '#E9F0F7',
        justifyContent: 'center',
        borderRadius: 60,
        marginRight: 15,

        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD'
    },
    done_text: {
        color: '#274170',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '600',
        justifyContent: 'center',
    },
    view_img: {
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_container: {
        height: 89,
        width: 89,
        backgroundColor: '#E9F0F7',
        borderRadius: 60,
        alignSelf: 'center',
        justifyContent: 'center',

        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD'
    },
    edit_img_button: {
        borderRadius: 60,
        backgroundColor: '#E9F0F7',
        height: 40,
        width: 174,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',

        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD'
    },
    edit_img_text: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#193566',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    label_name: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: 15,
        marginTop: 14
    },
    label_email: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: 15,
        marginTop: 22
    },
    text_input: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#193566',
        paddingLeft: 15,
    },

    logout_button: {
        borderRadius: 60,
        backgroundColor: '#E9F0F7',
        height: 40,
        width: 168,
        marginTop: 56,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD'
    },
    logout_text: {
        color: '#274170',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
    } ,
    textInputContainer: {
        width: scaleSize(358),
        height: scaleSize(40),
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        borderWidth: scaleSize(1),
        borderColor: '#8F9BB2',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});
