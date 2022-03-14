import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ChatTabProps, HomeTabProps, MainTabParamsList} from '../TabNavigatorParams';
//Home Prop
type UserHomeScreenProps = CompositeScreenProps<HomeTabProps, UserRootScreenProps>;
type UserChatScreenProps = CompositeScreenProps<ChatTabProps, UserRootScreenProps>;

export type MainTabProps<T extends keyof MainTabParamsList> = CompositeScreenProps<
    BottomTabScreenProps<MainTabParamsList, T>,
    UserStackProps<keyof UserStackParamList>
>;
//App Stack Navigator
export type UserStackParamList = {
    UserRoot: NavigatorScreenParams<MainTabParamsList>;
    FeelingModal: undefined;
    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
    Search: undefined;
    ChatStack: NavigatorScreenParams<UserChatStackParamList>;
};
type EmotionDiaryScreenProps = NativeStackScreenProps<UserStackParamList, 'EmotionDiary'>;
type DashboardEmotionDiaryScreenProps = NativeStackScreenProps<UserStackParamList, 'DashboardEmotionDiary'>;
type UserRootScreenProps = NativeStackScreenProps<UserStackParamList, 'UserRoot'>;
type FeelingModalScreenProps = NativeStackScreenProps<UserStackParamList, 'FeelingModal'>;
type SearchScreenProps = NativeStackScreenProps<UserStackParamList, 'Search'>;

export type UserStackProps<T extends keyof UserStackParamList> = NativeStackScreenProps<UserStackParamList, T>;

export type {
    UserChatScreenProps,
    UserHomeScreenProps,
    UserRootScreenProps,
    FeelingModalScreenProps,
    EmotionDiaryScreenProps,
    DashboardEmotionDiaryScreenProps,
    SearchScreenProps,
};

//Chat
export type UserChatStackParamList = {
    MainChat: {user: any};
    ChatSearch: undefined;
    ChooseExpert: undefined;
    ExpertProfileChat: undefined;
};
export type UserChatStackProps<T extends keyof UserChatStackParamList> = NativeStackScreenProps<
    UserChatStackParamList,
    T
>;
