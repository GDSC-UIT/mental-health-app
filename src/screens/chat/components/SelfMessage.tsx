import {scaleSize} from '../../../../core/utils';
import {COLORS} from '../../../assets/const';
import {IMAGES} from '../../../assets';
import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';

interface SelfMessageProps {
    message: string;
}

const SelfMessage: React.FC<SelfMessageProps> = props => {
    const {message} = props;
    return (
        <View style={styles.self}>
            <Text style={styles.messageText}>{message}</Text>
        </View>
    );
};

export default SelfMessage;

const styles = StyleSheet.create({
    self: {
        marginRight: 24,
        marginTop: 24,
        borderRadius: 10,
        height: 133,
        width: 262,
        backgroundColor: '#AED2F7',

        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD',
        marginLeft: 104,
    },
    messageText: {
        fontSize: 17,
        fontFamily: 'Roboto',
        color: '#8F9BB2',
        padding: 6,
    },
});
