import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AuthState = FirebaseAuthTypes.User;

// @ts-ignore
export const initialState: AuthState = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state = initialState;
        },
        login: (state, action: PayloadAction<AuthState>) => {
            state = action.payload;
        },
        update: (state, action: PayloadAction<AuthState>) => {
            state = {...state, ...action.payload};
        },
    },
});

export const authActions = authSlice.actions;
