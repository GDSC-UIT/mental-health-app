import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import chatApi from '@src/api/chatApi';

type IMessage = {
    _id: string | number;
    text: string;
    createdAt: Date | number;
    user?: User;
};
type User = {
    _id: string | number;
    name: string;
    avatar: string;
};

type Props = {
    ws: any;
};

const user = 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b';
const receiver = '3ac68afc-c605-48d3-a4f8-fbd91aa97f63';

const Messages: React.FC<Props> = ({ws}) => {
    const [messages, setMessages] = React.useState<IMessage[]>([]);
    const [serverState, setServerState] = React.useState('Loading...');

    React.useEffect(() => {
        ws.onopen = () => {
            setServerState('Connected to the server');
        };
        ws.onclose = e => {
            setServerState('Disconnected. Check internet or server.');
        };
        ws.onerror = e => {
            setServerState(e.message);
        };
        ws.onmessage = e => {
            const data = JSON.parse(e.data);
            console.log(data);
        };

        let mounted = true;
        chatApi
            .getMessages(user, receiver)
            .then(({data}) => {
                if (mounted) {
                    console.log(data);
                }
            })
            .catch(e => {
                console.log('error message:', e);
            });
        return () => (mounted = false);
    }, []);

    const submitMessage = message => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, message));
        const lengthMessage = message.length;
        messageRecent = message[lengthMessage - 1];
        const {text} = messageRecent;
        const messageObjString = JSON.stringify({Content: text, ReceiverID: receiver});
        console.log(typeof messageObjString);
        ws.send(messageObjString);
    };

    const renderSend = (props: any) => {
        return (
            <Send {...props} containerStyle={{width: scaleSize(40), height: scaleSize(40)}}>
                <View>
                    <Ionicons name="play" style={{marginBottom: scaleSize(8)}} size={scaleSize(25)} color="#8F9BB2" />
                </View>
            </Send>
        );
    };

    const renderBubble = (propsBubble: any) => {
        return (
            <Bubble
                {...propsBubble}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLORS.light_blue_2,
                        ...STYLES.deepShadow,
                        marginBottom: scaleSize(10),
                    },
                    left: {
                        backgroundColor: COLORS.white_3,
                        ...STYLES.deepShadow,
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
                timeTextStyle={{
                    right: {color: COLORS.gray_4},
                    left: {color: COLORS.gray_4},
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return <Ionicons name="chevron-down-outline" size={22} color="#8F9BB2" />;
    };

    const renderInputToolbar = (toolBarProps: InputToolbar['props']) => {
        return <InputToolbar {...toolBarProps} containerStyle={styles.toolbar} />;
    };

    return (
        <GiftedChat
            user={{_id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b'}}
            messages={messages}
            onSend={message => submitMessage(message)}
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
        bottom: scaleSize(10),
        marginLeft: scaleSize(60),
    },
});
