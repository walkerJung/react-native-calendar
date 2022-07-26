import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  CalendarScreen,
  LibraryScreen,
  MypageScreen,
} from '../screens';
import {Ionicons} from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: () => <Ionicons name="ios-home" size={30} />,
          }}
        />
        <BottomTab.Screen
          name="calendar"
          component={CalendarScreen}
          options={{
            tabBarLabel: 'CALENDAR',
            tabBarIcon: () => <Ionicons name="calendar" size={30} />,
          }}
        />
        <BottomTab.Screen
          name="library"
          component={LibraryScreen}
          options={{
            tabBarLabel: 'LIBRARY',
            tabBarIcon: () => <Ionicons name="library" size={30} />,
          }}
        />
        <BottomTab.Screen
          name="mypage"
          component={MypageScreen}
          options={{
            tabBarLabel: 'MY PAGE',
            tabBarIcon: () => <Ionicons name="menu" size={30} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Tab;
