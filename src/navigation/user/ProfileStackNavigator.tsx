import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import {DashboardEmotionDiaryScreen, EmotionDiaryScreen} from '@src/screens/emotion_diary';
import UserEditProfileScreen from '@src/screens/profile/User/UserEditProfile';
import React from 'react';
import {UserProfileStackParamList} from './type';

const UserProfileStack = createNativeStackNavigator<UserProfileStackParamList>();

const UserProfileStackNavigator = () => {
    return (
        <UserProfileStack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerShown: true,
                header: props => <Header {...props} />,
            }}>
            <UserProfileStack.Screen
                name="EditProfile"
                options={{title: 'Edit Profile'}}
                component={UserEditProfileScreen}
            />

            <UserProfileStack.Group
                screenOptions={{
                    title: 'Emotion Diary',
                }}>
                <UserProfileStack.Screen name="EmotionDiary" component={EmotionDiaryScreen} />
                <UserProfileStack.Screen name="DashboardEmotionDiary" component={DashboardEmotionDiaryScreen} />
            </UserProfileStack.Group>
        </UserProfileStack.Navigator>
    );
};

export default UserProfileStackNavigator;
