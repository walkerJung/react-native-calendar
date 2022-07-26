import React from 'react';
import {SafeAreaView} from 'react-native';
import Tab from './src/navigation/Tab';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Tab />
    </SafeAreaView>
  );
};

export default App;
