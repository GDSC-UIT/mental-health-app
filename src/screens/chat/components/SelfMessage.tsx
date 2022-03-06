import { scaleSize } from '../../../../core/utils';
import { COLORS } from '../../../assets/const';
import {IMAGES} from '../../../assets'
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

interface SelfMessageProps {
    message: string,
};

const SelfMessage: React.FC<SelfMessageProps> = props => {
    const {message} = props;
    return (
        <View style={styles.container}>
            <View style={styles.self}>
                <Text style={styles.messageText}>{message}</Text>
            </View>
        </View>
    );
};

export default SelfMessage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 21,
        marginTop: 15,
        alignSelf: 'flex-end',
        marginRight: 24,
        maxWidth: 262
    },
    self: {
        borderRadius: 10,
        height: 'auto',
        width: 'auto',
        backgroundColor: '#AED2F7',

        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD',
    },
    messageText:{
        fontSize: 17,
        fontFamily: 'Roboto',
        color: '#8F9BB2',
        padding: 6
    }
});
