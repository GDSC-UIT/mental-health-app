import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
    Intro: undefined;

    //Auth
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;

    UserChatHome: undefined;
    WithExpertChat: undefined;
    WithStrangerChat: undefined;
    ExpertChatHome: undefined;
    WithUserChat: undefined;
    UserProfile: undefined;

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

    UserChatHome: undefined;
    WithExpertChat: undefined;
    WithStrangerChat: undefined;
    ExpertChatHome: undefined;
    WithUserChat: undefined;
    UserProfile: undefined;

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

// Chat
type UserChatHomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'UserChatHome'>;
type WithExpertChatScreenProps = NativeStackScreenProps<AuthStackParamList, 'WithExpertChat'>;
type WithStrangerChatScreenProps = NativeStackScreenProps<AuthStackParamList, 'WithStrangerChat'>;
type ExpertChatHomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'ExpertChatHome'>;
type WithUserChatScreenProps = NativeStackScreenProps<AuthStackParamList, 'WithUserChat'>;
type UserProfileScreenProps = NativeStackScreenProps<AuthStackParamList, 'UserProfile'>;

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
    UserChatHomeScreenProps,
    WithExpertChatScreenProps,
    WithStrangerChatScreenProps,
    ExpertChatHomeScreenProps,
    WithUserChatScreenProps,
    UserProfileScreenProps,
};
