import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RootNavigator from './UserRootNavigator';
import {UserStackParamList} from './type';
import FeelingModal from '@src/screens/home/user/components/FeelingModal';
import {SearchScreen} from '@src/screens/explore';
const UserStack = createNativeStackNavigator<UserStackParamList>();

const UserStackNavigator = () => {
    return (
        <UserStack.Navigator
            initialRouteName="UserRoot"
            screenOptions={{
                headerShown: false,
            }}>
            <UserStack.Screen name="UserRoot" component={RootNavigator} />
            <UserStack.Screen name="Search" component={SearchScreen} />
            {/* <UserStack.Screen name="" component={SearchScreen} /> */}
        </UserStack.Navigator>
    );
};

export default UserStackNavigator;
