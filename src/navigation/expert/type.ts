import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
    ChatTabProps,
    ExploreTabProps,
    HomeTabProps,
    ProfileTabProps,
    TabNavigatorParamsList,
} from '../TabNavigatorParams';

//Expert Home Prop
type ExpertHomeScreenCompositeProps = CompositeScreenProps<HomeTabProps, NativeStackScreenProps<ExpertStackParamList>>;
type ExploreScreenCompositeProps = CompositeScreenProps<ExploreTabProps, NativeStackScreenProps<ExpertStackParamList>>;
type ExpertChatScreenCompositeProps = CompositeScreenProps<ChatTabProps, NativeStackScreenProps<ExpertStackParamList>>;
type ExpertProfileCompositeProps = CompositeScreenProps<ProfileTabProps, NativeStackScreenProps<ExpertStackParamList>>;
export type {
    ExpertHomeScreenCompositeProps,
    ExploreScreenCompositeProps,
    ExpertChatScreenCompositeProps,
    ExpertProfileCompositeProps,
};

//App Stack Navigator
export type ExpertStackParamList = {
    ExpertRoot: NavigatorScreenParams<TabNavigatorParamsList>;
    CreatePost: undefined;
    CreateEvent: undefined;
    Search: undefined;
    ChatStack: NavigatorScreenParams<ChatStackParamList>;
    EditProfile: undefined;
};
type ExpertRootScreenProps = NativeStackScreenProps<ExpertStackParamList, 'ExpertRoot'>;
type CreatePostScreenProps = NativeStackScreenProps<ExpertStackParamList, 'CreatePost'>;
type CreateEventScreenProps = NativeStackScreenProps<ExpertStackParamList, 'CreateEvent'>;
type SearchScreenProps = NativeStackScreenProps<ExpertStackParamList, 'Search'>;
type ExpertChatScreenProps = NativeStackScreenProps<ExpertStackParamList, 'ChatStack'>;
type EditProfileScreenProps = NativeStackScreenProps<ExpertStackParamList, 'EditProfile'>;

export type {
    ExpertRootScreenProps,
    EditProfileScreenProps,
    CreatePostScreenProps,
    CreateEventScreenProps,
    ExpertChatScreenProps,
};

export type ChatStackParamList = {
    // Expert
    WithUserChat: undefined;
    UserProfileChat: undefined;
    DashboardEmotionDiary: undefined;
    // User
    ChatWithExpert: undefined;
    WithExpertChat: undefined;
    ExpertProfileChat: undefined;
    WithStrangerChat: undefined;

    SearchScreen: undefined;
};

// Expert
type WithUserChatScreenProps = NativeStackScreenProps<ChatStackParamList, 'WithUserChat'>;
type UserProfileChatScreenProps = NativeStackScreenProps<ChatStackParamList, 'UserProfileChat'>;
type DashboardEmotionDiaryProps = NativeStackScreenProps<ChatStackParamList, 'DashboardEmotionDiary'>;
// User

type MainChatScreenProps = NativeStackScreenProps<ChatStackParamList, 'MainChat'>;
type WithExpertChatScreenProps = NativeStackScreenProps<ChatStackParamList, 'WithExpertChat'>;
type ExpertProfileChatScreenProps = NativeStackScreenProps<ChatStackParamList, 'ExpertProfileChat'>;
type WithStrangerChatScreenProps = NativeStackScreenProps<ChatStackParamList, 'WithStrangerChat'>;

type SearchScreenScreenProps = NativeStackScreenProps<ChatStackParamList, 'SearchScreen'>;

export type {
    SearchScreenScreenProps,
    // Expert
    WithUserChatScreenProps,
    UserProfileChatScreenProps,
    DashboardEmotionDiaryProps,
    // User
    ChatWithExpertScreenProps,
    WithExpertChatScreenProps,
    ExpertProfileChatScreenProps,
    WithStrangerChatScreenProps,
};
