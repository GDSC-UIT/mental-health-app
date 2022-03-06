import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import {DashboardEmotionDiaryScreen, EmotionDiaryScreen} from '@src/screens/emotion_diary';
import ExpertLoginScreen from '@src/screens/login/expert';
import UserLoginScreen from '@src/screens/login/user';
import RegisterScreen from '@src/screens/register';
import RoleScreen from '@src/screens/role';
import React from 'react';
import {AuthStackParamList} from './AuthStackParams';
import HomeChatScreen from '../screens/chat/index';
import WithStrangerChatScreen from '@src/screens/chat/withStranger';
import WithExpertChatSCreen from '@src/screens/chat/withExpert';
import ExpertHomeScreen from '@src/screens/chat/withExpert/ExpertHome';
// import ExpertProfileScreen from '@src/screens/chat/withExpert/ExpertProfile';
// import UserProfileScreen from '@src/screens/chat/Expert/UserProfile';
import UserProfileScreen from '@src/screens/profile/User/index';
import EditUserProfileScreen from '@src/screens/profile/User/EditProfile';
import ExpertProfileScreen from '@src/screens/profile/Expert/index';
import EditExpertProfileScreen from '@src/screens/profile/Expert/EditProfile';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator
            screenOptions={({navigation}) => ({
                headerShown: true,
                headerTransparent: true,
                headerShadowVisible: false,
                title: '',
            })}
            initialRouteName={'EditExpertProfile'}>
            <AuthStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
            <AuthStack.Screen name="UserLogin" component={UserLoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="RoleChoose" component={RoleScreen} />
            <AuthStack.Screen name="HomeChat" component={HomeChatScreen}/>
            <AuthStack.Screen name="WithStrangerChat" component={WithStrangerChatScreen}/>
            <AuthStack.Screen name="WithExpertChat" component={WithExpertChatSCreen}/>
            <AuthStack.Screen name="ExpertHome" component={ExpertHomeScreen}/>
            <AuthStack.Screen name="ExpertProfile" component={ExpertProfileScreen}/>
            <AuthStack.Screen name="UserProfile" component={UserProfileScreen}/>
            <AuthStack.Screen name="EditUserProfile" component={EditUserProfileScreen}/>
            <AuthStack.Screen name="EditExpertProfile" component={EditExpertProfileScreen}/>

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
