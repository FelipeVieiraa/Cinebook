import React from 'react';
import UsersProvider from './users';

interface ProviderProps {
  children: React.ReactNode;
}

function StoreProviders({children}: ProviderProps) {
  return(
    <UsersProvider>
      {children}
    </UsersProvider>
  );
}

export default StoreProviders;