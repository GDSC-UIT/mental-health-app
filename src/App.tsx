import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <View>
                <Text>Hello World</Text>
            </View>
        </Provider>
    );
};

export default App;
