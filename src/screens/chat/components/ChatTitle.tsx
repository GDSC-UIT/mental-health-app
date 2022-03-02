import {scaleSize} from '../../../../core/utils';
import {COLORS} from '../../../assets/const';
import {IMAGES} from '../../../assets';
import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';

interface ChatTitleProps {
    name: string;
}

const ChatTitle: React.FC<ChatTitleProps> = props => {
    const {name} = props;
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={IMAGES.profile} style={{marginLeft: 23}} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default ChatTitle;

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#193566',
        marginLeft: 16,
    },
});
