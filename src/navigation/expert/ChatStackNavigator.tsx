import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import SearchScreen from '@src/screens/chat/components/Search/SearchScreen';
// Expert
import ExpertChatHomeScreen from '@src/screens/chat/expert';
import WithUserChatScreen from '@src/screens/chat/expert/WithUserChat';
import UserProfileChatScreen from '@src/screens/chat/expert/UserProfile';
// User
import UserChatHomeScreen from '@src/screens/chat/user';
import ChatWithExpertScreen from '@src/screens/chat/user/withExpert';
import MainChatScreen from '@src/screens/chat/user/main_chat';
import ExpertProfileChatScreen from '@src/screens/chat/user/withExpert/ExpertProfile';
import DashboardEmotionScreen from '@src/screens/emotion_diary/DashboardEmotionDiary';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ChatStackParamList} from './type';

const ChatStack = createNativeStackNavigator<ChatStackParamList>();

const ChatStackNavigator: React.FC = () => {
    return (
        <ChatStack.Navigator
            screenOptions={() => ({
                //headerTitle: props => <HeaderChat {...props} />,
                headerShown: false,
            })}>
            <ChatStack.Screen name="SearchScreen" component={SearchScreen} />
            {/* Expert */}
            {/* <ChatStack.Screen name="ExpertChatHome" component={ExpertChatHomeScreen} /> */}
            <ChatStack.Screen name="WithUserChat" component={WithUserChatScreen} />
            <ChatStack.Screen name="UserProfileChat" component={UserProfileChatScreen} />

            {/* User */}
            <ChatStack.Screen name="UserChatHome" component={UserChatHomeScreen} />
            <ChatStack.Screen name="MainChat" component={MainChatScreen} />
            <ChatStack.Screen name="ChatWithExpert" component={ChatWithExpertScreen} />
            <ChatStack.Screen name="ExpertProfileChat" component={ExpertProfileChatScreen} />

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
