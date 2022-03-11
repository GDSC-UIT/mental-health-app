import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RootNavigator from './UserRootNavigator';
import {UserStackParamList} from './type';
import FeelingModal from '@src/screens/home/user/components/FeelingModal';
import UserProfileStackNavigator from './ProfileStackNavigator';
const UserStack = createNativeStackNavigator<UserStackParamList>();

const UserStackNavigator = () => {
    return (
        <UserStack.Navigator
            initialRouteName="UserRoot"
            screenOptions={{
                headerShown: false,
            }}>
            <UserStack.Screen name="UserRoot" component={RootNavigator} />
            <UserStack.Screen name="UserProfile" component={UserProfileStackNavigator} />
        </UserStack.Navigator>
    );
};

export default UserStackNavigator;
