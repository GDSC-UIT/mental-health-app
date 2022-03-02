import {scaleSize} from '../../../../core/utils';
import {COLORS} from '../../../assets/const';
import {IMAGES} from '../../../assets';
import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';

interface AnotherMessageProps {
    message: string;
}

const AnotherMessage: React.FC<AnotherMessageProps> = props => {
    const {message} = props;
    return (
        <View style={styles.container}>
            <Image source={IMAGES.user_chat} />
            <View style={styles.anotherMessage}>
                <Text style={styles.messageText}>{message}</Text>
            </View>
        </View>
    );
};

export default AnotherMessage;

const styles = StyleSheet.create({
    anotherMessage: {
        marginLeft: 14,
        borderRadius: 10,
        height: 69,
        width: 262,
        backgroundColor: '#E9F0F7',

        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 21,
        marginTop: 15,
    },
    messageText: {
        fontSize: 17,
        fontFamily: 'Roboto',
        color: '#8F9BB2',
        padding: 6,
    },
});
