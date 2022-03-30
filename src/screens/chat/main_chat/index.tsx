import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {UserChatStackProps} from '@src/navigation/user/type';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import Messages from '@src/screens/chat/components/Message';
import React from 'react';
const MainChatScreen: React.FC<UserChatStackProps<'MainChat'>> = ({navigation, route}) => {
    const {withStranger, user: partner} = route.params;

    console.log('My partner: ', partner);
    const withExpert = partner.is_expert;
    return (
        <Box bgColor={COLORS.gray_1} container safeArea>
            <HeaderChat
                profile={!withStranger && withExpert}
                emotion={withExpert}
                isAnonymous={withStranger}
                user={route?.params?.user}
                goToProfile={() =>
                    navigation.navigate('ExpertProfileChat', {
                        expert: partner,
                    })
                }
            />

            <Messages friend={route.params.user} />
        </Box>
    );
};

export default MainChatScreen;
