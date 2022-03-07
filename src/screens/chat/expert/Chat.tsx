import {StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import IconButton from '@src/components/IconButton';
import Messages from '@src/screens/chat/components/Message/LastMessage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';

type Props = {};

const WithUserChatScreen = () => {
    return (
        <Box bgColor={COLORS.gray_1} container>
            <HeaderChat />

            <View style={{flex: 1, zIndex: -10}}>
                <IconButton
                    style={[styles.button, {left: scaleSize(-4)}]}
                    icon={<Ionicons name="images" size={20} color={COLORS.dark_gray_2} />}
                />
                <Messages />

                <IconButton
                    style={[styles.button, {right: scaleSize(15)}]}
                    icon={<Ionicons name="heart" size={22} color={'#EFA19E'} />}
                />
            </View>
        </Box>
    );
};

export default WithUserChatScreen;

const styles = StyleSheet.create({
    button: {
        borderRadius: scaleSize(60),
        backgroundColor: '#E9F0F7',
        marginLeft: scaleSize(16),
        justifyContent: 'center',
        alignItems: 'center',
        ...STYLES.deepShadow,
        position: 'absolute',
        bottom: scaleSize(14),
        zIndex: 3,
    },
});
