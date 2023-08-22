import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Post from '../Screens/Post';
import TapTabNavigation from './TapTabNavigation';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="TapTabNavigation" component={TapTabNavigation} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;