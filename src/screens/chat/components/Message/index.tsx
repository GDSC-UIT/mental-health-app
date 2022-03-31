import {scaleSize} from '@core/utils';
import {useFocusEffect} from '@react-navigation/native';
import chatApi from '@src/api/chatApi';
import {COLORS, NON_AVATAR, RANDOM_IMAGE, STYLES} from '@src/assets/const';
import {DismissKeyboardView} from '@src/components';
import {useChat} from '@src/context/ChatContext';
import SplashScreen from '@src/screens/splash';
import {useAppSelector} from '@src/store';
import {User} from '@src/types';
import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Bubble, GiftedChat, IMessage, InputToolbar, Send} from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MessagesProps = {
    friend: User;
    isAnonymous?: boolean;
};
const Messages: React.FC<MessagesProps> = ({friend, isAnonymous}) => {
    const user = useAppSelector(state => state.auth.user);
    const {t} = useTranslation();
    const [messageList, setMessageList] = useState<IMessage[]>([]);
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);
    if (isAnonymous) {
        friend = {
            ...friend,
            name: t('Anonymous'),
            firebase_user_id: friend.firebase_user_id,
            picture: NON_AVATAR,
            is_expert: false,
            email: friend.email,
        };
    }
    useFocusEffect(
        useCallback(() => {
            let mounted = true;
            setLoading(true);
            chatApi
                .getMessages(user!.firebase_user_id, friend.firebase_user_id)
                .then(({data}: any) => {
                    if (!data?.Message && mounted) {
                        setLoading(false);
                        setMessageList([]);
                        return;
                    }
                    const messages: IMessage[] = data?.Message.map((item: any) => ({
                        _id: item.ID,
                        text: item.Content,
                        createdAt: item.CreatedAt,
                        user: {
                            _id: item.SenderID,
                            name: item.Sender.name ?? 'Dat DT',
                            avatar: item.Sender.picture || RANDOM_IMAGE,
                        },
                        sent: true,
                    }));
                    messages.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

                    console.log('First loading messages: ');
                    if (mounted) {
                        setMessageList(messages);
                        setLoading(false);
                    }
                })
                .catch(e => {
                    console.log('error message:', e);
                    if (mounted) {
                        setLoading(false);
                    }
                });
            const timer = setInterval(() => {
                !sending &&
                    !loading &&
                    chatApi
                        .getMessages(user!.firebase_user_id, friend.firebase_user_id)
                        .then(({data}: any) => {
                            if (!data?.Message) {
                                setMessageList([]);
                                return;
                            }
                            const messages: IMessage[] = data?.Message.map((item: any) => ({
                                _id: item.ID,
                                text: item.Content,
                                createdAt: item.CreatedAt,
                                user: {
                                    _id: item.SenderID,
                                    name: item.Sender.name ?? 'Dat DT',
                                    avatar: item.Sender.picture || RANDOM_IMAGE,
                                },
                                sent: true,
                            }));
                            console.log('Messages successfully ');
                            messages.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
                            if (mounted && !sending && !loading) {
                                setMessageList(messages);
                            }
                        })
                        .catch(e => {
                            console.log('error message:', e);
                        });
            }, 10000);
            return () => {
                mounted = false;
                console.log('Mounted', mounted);
                clearInterval(timer);
            };
        }, [user, friend.firebase_user_id]),
    );

    const submitMessage = async (messages: IMessage[]) => {
        setSending(true);
        const message = messages[0];
        message.sent = false;
        setMessageList(previousMessages => GiftedChat.append(previousMessages, [message]));
        try {
            console.log('Just Sended');
            const data = await chatApi.sendMessage({
                senderId: user?.firebase_user_id,
                content: message.text,
                receiverId: friend.firebase_user_id,
            });
            console.log('Send successfully');
            setMessageList(previousMessages => {
                const prevMessages = [...previousMessages];
                const index = previousMessages.findIndex(item => item._id === message._id);
                if (index !== -1) {
                    prevMessages[index] = {
                        _id: data.id ?? message._id,
                        text: data.content ?? message.text,
                        createdAt: data.createdAt ?? new Date(),
                        user: {
                            _id: user!.firebase_user_id,
                            name: user!.name ?? 'Dat DT',
                            avatar: user!.picture || RANDOM_IMAGE,
                        },
                        sent: true,
                    };
                    return prevMessages;
                }

                return previousMessages;
            });
        } catch (error) {
            console.log(error);
        }
        setSending(false);
    };

    if (!user) {
        return <SplashScreen />;
    }

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
                        marginBottom: scaleSize(20),
                        paddingVertical: scaleSize(4),
                    },
                    left: {
                        backgroundColor: COLORS.white_3,
                        paddingVertical: scaleSize(4),
                        ...STYLES.deepShadow,
                    },
                }}
                textStyle={{
                    right: styles.text,
                    left: styles.text,
                }}
                timeTextStyle={{
                    right: styles.timeText,
                    left: styles.timeText,
                }}
                renderTicks={(currentMessage: IMessage) =>
                    currentMessage.sent ? null : (
                        <ActivityIndicator
                            style={{marginRight: scaleSize(8), marginBottom: scaleSize(6)}}
                            size={20}
                            color="#8F9BB2"
                        />
                    )
                }
                containerStyle={{right: {elevation: -1}}}
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
            user={{_id: user.firebase_user_id, name: user.name, avatar: user.picture ?? RANDOM_IMAGE}}
            messages={messageList}
            onSend={message => submitMessage(message)}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
            renderInputToolbar={renderInputToolbar}
            loadEarlier={loading}
            isLoadingEarlier={true}
        />
    );
};

export default Messages;

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: COLORS.gray_1,
        paddingVertical: scaleSize(2),
    },
    text: {
        color: COLORS.black_1,
        fontSize: scaleSize(16),
    },
    timeText: {color: COLORS.gray_4, fontSize: scaleSize(12)},
});
