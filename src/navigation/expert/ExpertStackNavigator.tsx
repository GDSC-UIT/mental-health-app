import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import {SearchScreen} from '@src/screens/explore';
import CreateEventScreen from '@src/screens/home/expert/create_event';
import CreatePostScreen from '@src/screens/home/expert/create_post';
import EditProfile from '@src/screens/profile/components/EditProfile';
import ExpertEditProfileScreen from '@src/screens/profile/expert/ExpertEditProfile';
import React from 'react';
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
            <ExpertStack.Screen
                name="EditProfile"
                options={{
                    headerShadowVisible: false,
                    headerShown: true,
                    title: 'Edit Profile',
                    header: props => <Header {...props} />,
                }}
                component={ExpertEditProfileScreen}
            />
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
