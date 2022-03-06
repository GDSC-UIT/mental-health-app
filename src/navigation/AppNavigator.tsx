import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {AuthState} from '../store/authSlice';
import AuthNavigator from './AuthNavigator';

const AppNavigator: FC = ({children}) => {
    const auth = useSelector<RootState, AuthState>(state => state.auth);

    // if (auth.token) {
    if (true) {
        return <AuthNavigator />;
    }
    return <AuthNavigator />;
};

export default AppNavigator;
