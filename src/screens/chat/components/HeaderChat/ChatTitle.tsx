import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface ChatTitleProps {
    name: string;
}

const ChatTitle: React.FC<ChatTitleProps> = props => {
    const {name} = props;
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                source={IMAGES.user_avatar}
                style={{marginLeft: 23, width: scaleSize(60), height: scaleSize(60), borderRadius: scaleSize(60)}}
            />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default ChatTitle;

const styles = StyleSheet.create({
    name: {
        fontSize: scaleSize(24),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#193566',
        marginLeft: scaleSize(16),
    },
});
