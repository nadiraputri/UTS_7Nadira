import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Started from '../app/list/Started';
import Menu from './list/menu';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Started" component={Started} />
        <Stack.Screen name="menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
