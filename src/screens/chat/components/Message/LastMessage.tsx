import {scaleSize} from '@core/utils';
import React, {useState, useCallback, useEffect, FC} from 'react';
import {Bubble, GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet} from 'react-native';
import {COLORS, STYLES} from '@src/assets/const';

type IMessage = {
    _id: string | number;
    text: string;
    createdAt: Date | number;
    user?: User;
};

const Messages: React.FC<IMessage> = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 'd9vnw4n3-02xo-471f-tjlk-30823xnaowm4',
                text: 'Đi mình đi má ai gảnk',
                createdAt: new Date(),
                user: {
                    _id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    name: 'Kary',
                    avatar: 'https://placeimg.com/640/480/animals',
                },
            },
            {
                _id: '58694a0f-3da1-471f-bd96-145571e29d72',
                text: 'Chao em, \nNgay mai di cafe nhe!',
                createdAt: new Date(),
                user: {
                    _id: 'd9vnw4n3-02xo-471f-tjlk-30823xnaowm4',
                    name: 'Roy',
                    avatar: 'https://placeimg.com/640/480/animals',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((message = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, message));
    }, []);

    const renderSend = props => {
        return (
            <Send {...props} containerStyle={{width: 40, height: 40}}>
                <View>
                    <Ionicons name="play" style={{marginBottom: 8}} size={25} color="#8F9BB2" />
                </View>
            </Send>
        );
    };

    const renderBubble = props => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLORS.light_blue_2,
                        ...STYLES.deepShadow,
                        marginTop: scaleSize(10),
                    },
                    left: {
                        backgroundColor: COLORS.white_3,
                        ...STYLES.deepShadow,
                        marginTop: scaleSize(10),
                    },
                }}
                textStyle={{
                    right: {
                        color: COLORS.black_1,
                    },
                    left: {
                        color: COLORS.black_1,
                    },
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return <Ionicons name="chevron-down-outline" size={22} color="#8F9BB2" />;
    };

    const renderInputToolbar = props => {
        return <InputToolbar {...props} containerStyle={styles.toolbar} textInputStyle={{paddingTop: 10}} />;
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={message => onSend(message)}
            user={{
                _id: '58694a0f-3da1-471f-bd96-145571e29d72',
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
            renderInputToolbar={renderInputToolbar}
        />
    );
};

export default Messages;

const styles = StyleSheet.create({
    toolbar: {
        width: scaleSize(252),
        backgroundColor: COLORS.gray_1,
        borderWidth: 1,
        borderRadius: scaleSize(20),
        borderColor: COLORS.dark_gray_2,
        marginLeft: scaleSize(60),
    },
});
