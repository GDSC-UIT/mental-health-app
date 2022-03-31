import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {FONTS, NON_AVATAR} from '@src/assets/const';
import {DismissKeyboardView} from '@src/components';
import {t} from 'i18next';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface ChatTitleProps {
    name: string;
    avatar?: string;
    isAnonymous?: boolean;
}

const ChatTitle: React.FC<ChatTitleProps> = props => {
    const {name, avatar, isAnonymous = false} = props;
    return (
        <DismissKeyboardView>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={{uri: isAnonymous ? NON_AVATAR : avatar}}
                    style={{
                        marginLeft: scaleSize(23),
                        width: scaleSize(60),
                        height: scaleSize(60),
                        borderRadius: scaleSize(60),
                    }}
                />
                <Text style={styles.name}>{isAnonymous ? t('Anonymous') : name}</Text>
            </View>
        </DismissKeyboardView>
    );
};

export default ChatTitle;

const styles = StyleSheet.create({
    name: {
        ...FONTS.h2,
        marginLeft: scaleSize(16),
    },
});
