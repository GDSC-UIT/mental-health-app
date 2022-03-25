import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import {UserChatStackProps} from '@src/navigation/user/type';
import IconButton from '@src/components/IconButton';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import Messages from '@src/screens/chat/components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const MainChatScreen: React.FC<UserChatStackProps<'MainChat'>> = ({navigation, route}) => {
    const {withStranger, user: messenger, ws} = route.params;
    const withExpert = messenger.role === 'expert';
    return (
        <Box bgColor={COLORS.gray_1} container safeArea>
            <HeaderChat
                profile={!withStranger && withExpert}
                emotion={!withStranger && withExpert}
                user={route?.params?.user}
                goToProfile={() => navigation.navigate('ExpertProfileChat')}
            />
            <View style={{flex: 1, zIndex: -10}}>
                <IconButton
                    style={[styles.button, {left: scaleSize(-4)}]}
                    icon={<Ionicons name="images" size={20} color={COLORS.dark_gray_2} />}
                />
                <Messages ws={ws} />

                <IconButton
                    style={[styles.button, {right: scaleSize(15)}]}
                    icon={<Ionicons name="heart" size={22} color={'#EFA19E'} />}
                />
            </View>
        </Box>
    );
};

export default MainChatScreen;

const styles = StyleSheet.create({
    button: {
        borderRadius: scaleSize(60),
        backgroundColor: COLORS.white_3,
        marginLeft: scaleSize(16),
        ...STYLES.deepShadow,
        position: 'absolute',
        bottom: scaleSize(15),
        zIndex: 3,
    },
});
