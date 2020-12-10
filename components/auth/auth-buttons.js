import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';

export const AuthButton = () => {
  const {isAuthenticated, signIn, signOut} = useAuth()

  return !isAuthenticated ? (
      <Button onClick={signIn}>{'Login'}</Button>
    ) : (
      <Button onClick={ signOut}>
        {'Logout' }
      </Button>
    )
};


