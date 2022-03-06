import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
    Intro: undefined;

    //Auth
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;
    HomeChat: undefined;
    WithStrangerChat: undefined;
    WithExpertChat: undefined;
    ExpertHome: undefined;
    ExpertProfile: undefined;
    UserProfile: undefined;
    EditUserProfile: undefined;
    EditExpertProfile: undefined;

    //Root Stack
    Root: undefined;

    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
};

export type HomeStackParamList = {
    Intro: undefined;

    //Auth
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;
    HomeChat: undefined;
    WithStrangerChat: undefined;
    WithExpertChat: undefined;
    ExpertHome: undefined;
    ExpertProfile: undefined;
    UserProfile: undefined;
    EditUserProfile: undefined;
    EditExpertProfile: undefined;

    //Root Stack
    Root: undefined;

    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
};

//Authentication
type ExpertLoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'ExpertLogin'>;
type UserLoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'UserLogin'>;
type RegisterScreenProps = NativeStackScreenProps<AuthStackParamList, 'Register'>;
type IntroScreenProps = NativeStackScreenProps<AuthStackParamList, 'Intro'>;
type RoleChooseScreenProps = NativeStackScreenProps<AuthStackParamList, 'RoleChoose'>;
type HomeChatScreenProps = NativeStackScreenProps<AuthStackParamList, 'HomeChat'>;
type WithStrangerChatProps = NativeStackScreenProps<AuthStackParamList, 'WithStrangerChat'>;
type WithExpertChatProps = NativeStackScreenProps<AuthStackParamList, 'WithExpertChat'>;
type ExpertHomeProps = NativeStackScreenProps<AuthStackParamList, 'ExpertHome'>;
type ExpertProfileProps = NativeStackScreenProps<AuthStackParamList, 'ExpertProfile'>;
type UserProfileProps = NativeStackScreenProps<AuthStackParamList, 'UserProfile'>;
type EditUserProfileProps = NativeStackScreenProps<AuthStackParamList, 'EditUserProfile'>;
type EditExpertProfileProps = NativeStackScreenProps<AuthStackParamList, 'EditExpertProfile'>;

type RootStackProps = NativeStackScreenProps<AuthStackParamList, 'Root'>;

//Emotion Diary
type EmotionDiaryScreenProps = NativeStackScreenProps<AuthStackParamList, 'EmotionDiary'>;
type DashboardEmotionDiaryScreenProps = NativeStackScreenProps<AuthStackParamList, 'DashboardEmotionDiary'>;

export type {
    ExpertLoginScreenProps,
    UserLoginScreenProps,
    RegisterScreenProps,
    IntroScreenProps,
    RoleChooseScreenProps,
    EmotionDiaryScreenProps,
    DashboardEmotionDiaryScreenProps,
    RootStackProps,
    HomeChatScreenProps,
    WithStrangerChatProps,
    WithExpertChatProps,
    ExpertHomeProps,
    ExpertProfileProps,
    UserProfileProps,
    EditUserProfileProps,
    EditExpertProfileProps,
};
