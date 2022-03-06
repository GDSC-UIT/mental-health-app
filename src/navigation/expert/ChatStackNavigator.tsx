import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import WithUserChatScreen from '@src/screens/chat/expert/Chat';
import UserProfile from '@src/screens/chat/expert/UserProfile';
import DashboardEmotionScreen from '@src/screens/emotion_diary/DashboardEmotionDiary';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ChatStackParamList} from './type';

const ChatStack = createNativeStackNavigator<ChatStackParamList>();

const ChatStackNavigator: React.FC = () => {
    return (
        <ChatStack.Navigator
            screenOptions={() => ({
                headerTitle: () => <HeaderChat />,
                headerShown: false,
            })}>
            <ChatStack.Screen name="WithUserChat" component={WithUserChatScreen} />
            <ChatStack.Screen name="UserProfile" component={UserProfile} />
            <ChatStack.Screen
                name="DashboardEmotionDiary"
                options={{
                    headerShown: true,
                    title: 'Emotion Diary',
                    header: props => <Header {...props} />,
                }}
                component={DashboardEmotionScreen}
            />
        </ChatStack.Navigator>
    );
};
export default ChatStackNavigator;
const styles = StyleSheet.create({});
