import {scaleSize} from '@core/utils';
import React, {useState} from 'react';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {useNavigation} from '@react-navigation/native';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import BottomChat from '@src/screens/chat/components/BottomChat';
import {MainChatScreenProps} from '@src/navigation/expert/types';

type Props = {};

const MainChatScreen: React.FC<MainChatScreenProps> = ({route, navigation}) => {
    console.log(route);
    const withExpert = route.params.user.role === 'expert';
    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <HeaderChat
                onPress={() => navigation.push('ChatStack', {screen: 'ExpertProfileChat'})}
                profile={withExpert}
                emotion={withExpert}
            />
            <BottomChat />
        </Box>
    );
};

export default MainChatScreen;
