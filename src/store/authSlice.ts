import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AuthState = Partial<{
    uid: string;
    avatar: string;
    displayName: string;
    email: string;
    bio: string;
    isExpert: boolean;
}>;

// @ts-ignore
export const initialState: AuthState = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        login: (state, action: PayloadAction<AuthState>) => {
            return {...state, ...action.payload};
        },
        update: (state, action: PayloadAction<AuthState>) => {
            state = {...state, ...action.payload};
        },
    },
});

export const authActions = authSlice.actions;
