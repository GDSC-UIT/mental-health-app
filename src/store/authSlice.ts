import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AuthState = Partial<{
    avatar: string;
    name: string;
    email: string;
    bio: string;
    firebase_user_id: string;
    is_expert: boolean;
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
