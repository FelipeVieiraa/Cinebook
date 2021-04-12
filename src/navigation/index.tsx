import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigators/App.navigator';
import AuthNavigator from './navigators/Auth.navigator';

function RootNavigator() {
    const session = false;

    return(
        <NavigationContainer>
            {session ? <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default RootNavigator;