import React from 'react';

import SessionProvider from './session';
import UsersProvider from './users';

interface ProviderProps {
  children: React.ReactNode;
}

function StoreProviders({children}: ProviderProps) {
  return(
    <UsersProvider>
      <SessionProvider>
        {children}
      </SessionProvider>
    </UsersProvider>
  );
}

export default StoreProviders;