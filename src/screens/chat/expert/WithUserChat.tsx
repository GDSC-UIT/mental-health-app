import {scaleSize} from '@core/utils';
import React, {useState} from 'react';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {useNavigation} from '@react-navigation/native';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import BottomChat from '@src/screens/chat/components/BottomChat';

type Props = {};

const WithUserChatScreen = () => {
    const navigation = useNavigation<UserProfileScreenProps['navigation']>();

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <HeaderChat profile={true} onPress={() => navigation.push('ChatStack', {screen: 'UserProfileChat'})} />
            <BottomChat />
        </Box>
    );
};

export default WithUserChatScreen;
