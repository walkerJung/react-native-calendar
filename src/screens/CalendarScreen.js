import React, {useEffect, useState} from 'react';
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
} from 'react-native-reanimated';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import {addDays, startOfWeek, getMonth} from 'date-fns';

const CalendarScreen = () => {
  const [wrap, setWrap] = useState(true);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(startOfWeek(new Date(), {weekStartsOn: 0}));
  const yearMonth = year + '년' + ' ' + (month + 1) + '월';
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

  const prevWeek = () => {
    // if(month > ){
    // }else{
    //   setDate(startOfWeek(addDays(date, -7)));
    // }
  };

  const nextWeek = () => {
    setDate(startOfWeek(addDays(date, 7)));
  };

  useEffect(() => {
    sharedVal.value = wrap ? 'nowrap' : 'wrap';
  }, [wrap]);

  useEffect(() => {
    if (month < getMonth(date)) {
      setMonth(month + 1);
    }
  }, [date]);

  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Button title="<" onPress={prevWeek} />
        <Text>{yearMonth}</Text>
        <Button title=">" onPress={nextWeek} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CalendarHeader windowWidth={windowWidth} />
      </View>
      <FlingGestureHandler
        direction={Directions.UP | Directions.DOWN}
        onHandlerStateChange={({nativeEvent}) => {
          if (nativeEvent.state === State.ACTIVE) {
            setWrap(prev => !prev);
          }
        }}>
        <Animated.View
          style={{
            flexDirection: 'row',
            flexWrap: sharedVal.value,
          }}>
          <CalendarBodyOfWeek
            year={year}
            month={month}
            date={date}
            windowWidth={windowWidth}
          />
        </Animated.View>
      </FlingGestureHandler>
    </View>
  );
};

export default CalendarScreen;
