import React, {useState} from 'react';
import {Button, Text, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {
  CalendarHeader,
  CalendarBodyOfMonth,
  CalendarBodyOfWeek,
} from '../components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  FadeInUp,
} from 'react-native-reanimated';

const CalendarScreen = () => {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const yearMonth = year + '년' + ' ' + month + '월';
  const windowWidth = Dimensions.get('window').width;
  const sharedVal = useSharedValue('wrap');

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{flexWrap:}]
  // }), []);

  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Button title="<" onPress={prevMonth} />
        <Text>{yearMonth}</Text>
        <Button title=">" onPress={nextMonth} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CalendarHeader windowWidth={windowWidth} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <CalendarBodyOfMonth
          year={year}
          month={month}
          windowWidth={windowWidth}
          exiting={FadeInUp.duration(1500)}
        />
        <Button title="TEST" />
        {/* <CalendarBodyOfWeek
          year={year}
          month={month}
          windowWidth={windowWidth}
        /> */}
      </View>
    </View>
  );
};

export default CalendarScreen;
