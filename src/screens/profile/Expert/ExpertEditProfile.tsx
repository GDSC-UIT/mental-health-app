import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Image, StyleProp, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EditProfile from '../components/EditProfile';

const ExpertEditProfileScreen = ()  => {
    const {t} = useTranslation();
    let name, email, about;

    function alertLogout(){
        Alert.alert(
            "Notice", "Are you sure want to log out",
            [
                {text: "OK", onPress: () => console.log("OK Pressed")},
                {text: "Cancel", onPress: () => console.log("Cancel Pressed")}
            ]
        )
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <EditProfile name='Tan Mot Cu' image=''/>
            <View style={styles.textInputContainer}>
                <TextInput 
                    style={{...FONTS.body2, fontSize: scaleSize(20), paddingLeft: scaleSize(15)}}
                    value={'This is about'}
                    placeholder="Edit About Here"
                />
            </View>
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={alertLogout}
            >
                <Text style={{...FONTS.h2, fontSize: scaleSize(20), color: '#193566'}}>Log Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ExpertEditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
    },
    textInputContainer: {
        width: scaleSize(358),
        height: scaleSize(45),
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        borderWidth: scaleSize(1),
        borderColor: '#8F9BB2',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15
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

        ...STYLES.deepShadow
    }
});
