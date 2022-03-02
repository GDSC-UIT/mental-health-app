import {scaleSize} from '../../../../core/utils';
import {COLORS} from '../../../assets/const';
import {IMAGES} from '../../../assets';
import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {};

interface Iprops {
    navigate: void;
}

const BackButton = () => {
    const {navigate} = useNavigation();

    return (
        <TouchableOpacity style={styles.back_button} onPress={() => navigate('UserChatHome')}>
            <Image style={styles.back_button_img} />
        </TouchableOpacity>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    back_button: {
        height: scaleSize(40),
        width: scaleSize(40),
        borderRadius: scaleSize(60),
        backgroundColor: '#E9F0F7',
        marginLeft: scaleSize(16),
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD',
    },
    back_button_img: {
        height: scaleSize(20),
        width: scaleSize(20),
        alignSelf: 'center',
    },
});
