import React, {useState} from 'react';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const Routes = () => {
  const [user, setUser] = useState(false);
  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default Routes;
