import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../Screens/Home';
import Country from '../Screens/Country';
import { SafeAreaView } from 'react-native';

const TapTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Country} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TapTabNavigation;
