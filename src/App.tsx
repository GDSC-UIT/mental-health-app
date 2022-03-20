import {NavigationContainer} from '@react-navigation/native';
import React, {FC, Suspense, useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './screens/splash';
import {persistor, store} from './store';
const App: FC = () => {
    return (
        <Suspense fallback="Loading...">
            <Provider store={store}>
                <PersistGate loading={<SplashScreen />} persistor={persistor}>
                    <NavigationContainer>
                        <AppNavigator />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </Suspense>
    );
};

export default App;
