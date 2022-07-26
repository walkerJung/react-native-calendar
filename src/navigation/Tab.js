import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  CalendarScreen,
  LibraryScreen,
  MypageScreen,
} from '../screens';

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
          }}
        />
        <BottomTab.Screen
          name="calendar"
          component={CalendarScreen}
          options={{
            tabBarLabel: 'CALENDAR',
          }}
        />
        <BottomTab.Screen
          name="library"
          component={LibraryScreen}
          options={{
            tabBarLabel: 'LIBRARY',
          }}
        />
        <BottomTab.Screen
          name="mypage"
          component={MypageScreen}
          options={{
            tabBarLabel: 'MY PAGE',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Tab;
