import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  CalendarScreen,
  LibraryScreen,
  MypageScreen,
} from './src/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'HOME',
            }}
          />
          <Tab.Screen
            name="calendar"
            component={CalendarScreen}
            options={{
              tabBarLabel: 'CALENDAR',
            }}
          />
          <Tab.Screen
            name="library"
            component={LibraryScreen}
            options={{
              tabBarLabel: 'LIBRARY',
            }}
          />
          <Tab.Screen
            name="mypage"
            component={MypageScreen}
            options={{
              tabBarLabel: 'MY PAGE',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
