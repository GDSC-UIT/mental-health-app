import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '@src/screens/explore';
import CreateEventScreen from '@src/screens/home/expert/create_event';
import CreatePostScreen from '@src/screens/home/expert/create_post';
import ExpertEditProfile from '@src/screens/profile/Expert/EditProfile';
import React from 'react';
import ChatStackNavigator from './ChatStackNavigator';
import RootNavigator from './ExpertRootNavigator';
import {ExpertStackParamList} from './type';
const ExpertStack = createNativeStackNavigator<ExpertStackParamList>();

const ExpertStackNavigator = () => {
    return (
        <ExpertStack.Navigator
            initialRouteName="ExpertRoot"
            screenOptions={{
                headerShown: false,
            }}>
            <ExpertStack.Screen name="ExpertRoot" component={RootNavigator} />
            <ExpertStack.Screen name="CreatePost" component={CreatePostScreen} />
            <ExpertStack.Screen name="CreateEvent" component={CreateEventScreen} />
            <ExpertStack.Screen name="ChatStack" component={ChatStackNavigator} />

            <ExpertStack.Screen name="EditProfile" component={ExpertEditProfile} />

            <ExpertStack.Group
                screenOptions={{
                    presentation: 'modal',
                }}>
                <ExpertStack.Screen name="Search" component={SearchScreen} />
            </ExpertStack.Group>
        </ExpertStack.Navigator>
    );
};

export default ExpertStackNavigator;
