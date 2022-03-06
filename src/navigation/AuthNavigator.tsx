import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import UserChatHomeScreen from '@src/screens/chat/user';
import WithExpertChatScreen from '@src/screens/chat/user/withExpert';
import WithStrangerChatScreen from '@src/screens/chat/user/withStranger';
import ExpertChatHomeScreen from '@src/screens/chat/expert';
import WithUserChatScreen from '@src/screens/chat/expert/Chat';
import UserProfile from '@src/screens/chat/expert/UserProfile';
import ExpertLoginScreen from '@src/screens/auth/login/expert';
import UserLoginScreen from '@src/screens/auth/login/user';
import RegisterScreen from '@src/screens/auth/register';
import {DashboardEmotionDiaryScreen, EmotionDiaryScreen} from '@src/screens/emotion_diary';
import RoleScreen from '@src/screens/auth/role';
import React from 'react';
import {AuthStackParamList} from './AuthStackParams';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: true,
                headerTransparent: true,
                headerShadowVisible: false,
                title: '',
            }}
            initialRouteName={'RoleChoose'}>
            <AuthStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
            <AuthStack.Screen name="UserLogin" component={UserLoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="RoleChoose" component={RoleScreen} />

            <AuthStack.Screen name="UserChatHome" component={UserChatHomeScreen} />
            {/* <AuthStack.Screen name="WithExpertChat" component={WithExpertChatScreen} />
            <AuthStack.Screen name="WithStrangerChat" component={WithStrangerChatScreen} /> */}

            <AuthStack.Group
                screenOptions={() => ({
                    headerTitle: () => <HeaderChat />,
                    headerShown: false,
                })}>
                <AuthStack.Screen name="ExpertChatHome" component={ExpertChatHomeScreen} />
                <AuthStack.Screen name="WithUserChat" component={WithUserChatScreen} />
                <AuthStack.Screen name="UserProfile" component={UserProfile} />
            </AuthStack.Group>

            <AuthStack.Group
                screenOptions={{
                    title: 'Emotion Diary',
                    headerShadowVisible: false,
                    headerShown: true,
                    header: props => <Header {...props} />,
                }}>
                <AuthStack.Screen name="EmotionDiary" component={EmotionDiaryScreen} />
                <AuthStack.Screen name="DashboardEmotionDiary" component={DashboardEmotionDiaryScreen} />
            </AuthStack.Group>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
