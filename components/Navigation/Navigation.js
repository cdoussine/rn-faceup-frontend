import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import HomeScreen from '../Screens/Home';
import CameraScreen from '../Screens/Camera';

BottomNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen
  },
  {
    // The lastest version of react navigation requires us to use defaultNavigationOptions instead of navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        var iconName;
        var outline = focused
          ? ''
          : // : '-outline'; // this -outline is actually leading to a visual error. Another icon library could solve the problem.
            '';
        if (navigation.state.routeName == 'Camera') {
          Platform.OS === 'ios'
            ? (iconName = 'ios-camera')
            : (iconName = 'md-camera');
        } else if (navigation.state.routeName == 'Home') {
          Platform.OS === 'ios'
            ? (iconName = 'ios-home')
            : (iconName = 'md-home');
        }

        return (
          <Ionicons name={iconName + outline} size={25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#022F40'
      }
    }
  }
);

export default Navigation = createAppContainer(BottomNavigator);
