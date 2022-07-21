import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};
const CalendarScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CalendarScreen</Text>
    </View>
  );
};
const LibraryScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LibraryScreen</Text>
    </View>
  );
};
const MypageScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MypageScreen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="CALENDAR" component={CalendarScreen} />
        <Tab.Screen name="LIBRARY" component={LibraryScreen} />
        <Tab.Screen name="MY PAGE" component={MypageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
