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
    WithUserChat: undefined;
    UserProfile: undefined;
    DashboardEmotionDiary: undefined;
};
type WithUserChatScreenProps = NativeStackScreenProps<ChatStackParamList, 'WithUserChat'>;
type UserProfileScreenProps = NativeStackScreenProps<ChatStackParamList, 'UserProfile'>;
type DashboardEmotionDiaryProps = NativeStackScreenProps<ChatStackParamList, 'DashboardEmotionDiary'>;

export type {WithUserChatScreenProps, UserProfileScreenProps, DashboardEmotionDiaryProps};
