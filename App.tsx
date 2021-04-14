import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import StoreProviders from './src/store';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#F8F8F8"/>
      <StoreProviders>
        <RootNavigator/>
      </StoreProviders>
    </>
  );
}