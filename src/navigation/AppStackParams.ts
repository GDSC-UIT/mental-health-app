import {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ExpertStackParamList} from './expert/type';
import {UserStackParamList} from './user/type';

export type AppStackParamList = {
    //Auth
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;

    //Expert
    Expert: NavigatorScreenParams<ExpertStackParamList>;
    User: NavigatorScreenParams<UserStackParamList>;

    MainChat: {user: any; currentRole: 'expert' | 'user'};
    ChatSearch: undefined;
};

//Authentication
type ExpertLoginScreenProps = NativeStackScreenProps<AppStackParamList, 'ExpertLogin'>;
type UserLoginScreenProps = NativeStackScreenProps<AppStackParamList, 'UserLogin'>;
type RegisterScreenProps = NativeStackScreenProps<AppStackParamList, 'Register'>;
type RoleChooseScreenProps = NativeStackScreenProps<AppStackParamList, 'RoleChoose'>;

export type AppStackProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>;
export type {ExpertLoginScreenProps, UserLoginScreenProps, RegisterScreenProps, RoleChooseScreenProps, MainChatProps};
