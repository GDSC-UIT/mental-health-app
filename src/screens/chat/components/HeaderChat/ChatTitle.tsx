import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {FONTS} from '@src/assets/const';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface ChatTitleProps {
    username: string;
    image: string;
}

const ChatTitle: React.FC<ChatTitleProps> = props => {
    const {username} = props;
    const image = 'https://placeimg.com/640/480/animals';
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                source={{uri: image}}
                style={{marginLeft: 23, width: scaleSize(60), height: scaleSize(60), borderRadius: scaleSize(60)}}
            />
            <Text style={styles.name}>{username}</Text>
        </View>
    );
};

export default ChatTitle;

const styles = StyleSheet.create({
    name: {
        ...FONTS.h2,
        marginLeft: scaleSize(16),
    },
});
