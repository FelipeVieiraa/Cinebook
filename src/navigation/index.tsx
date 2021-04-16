import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigators/App.navigator';
import AuthNavigator from './navigators/Auth.navigator';
import { SessionContext } from '../store/session';

function RootNavigator() {
    const { state } = useContext(SessionContext);
    const session = state.user?.id;
    
    return(
        <NavigationContainer>
            {!!session ? <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default RootNavigator;