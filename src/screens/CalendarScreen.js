import React, {useEffect, useState} from 'react';
import {Button, Text, View, Dimensions} from 'react-native';
import {
  CalendarHeader,
  CalendarBodyOfMonth,
  CalendarBodyOfWeek,
} from '../components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import {addDays, startOfWeek, getYear, getMonth, format} from 'date-fns';

const CalendarScreen = () => {
  const [wrap, setWrap] = useState(true);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(startOfWeek(new Date(), {weekStartsOn: 0}));
  const [checkedDate, setCheckedDate] = useState(
    format(new Date(), 'MM/dd/yyyy'),
  );
  const yearMonth = year + '년' + ' ' + (month + 1) + '월';
  const windowWidth = Dimensions.get('window').width;
  const sharedVal = useSharedValue('wrap');

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const prevWeek = () => {
    setDate(startOfWeek(addDays(date, -7)));
  };

  const nextWeek = () => {
    setDate(startOfWeek(addDays(date, 7)));
  };

  const handlerGesture = () => {
    setWrap(!wrap);
    setDate(new Date(year, month));
  };

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      flexWrap: sharedVal.value,
    };
  });

  useEffect(() => {
    sharedVal.value = wrap ? 'wrap' : 'nowrap';
  }, [wrap]);

  useEffect(() => {
    if (getYear(date) < year) {
      setYear(year - 1);
      setMonth(11);
    } else if (getYear(date) > year) {
      setYear(year + 1);
      setMonth(0);
    } else {
      if (getMonth(date) > month) {
        setMonth(month + 1);
      }
      if (getMonth(date) < month) {
        setMonth(month - 1);
      }
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
        <Button title="<" onPress={wrap ? prevMonth : prevWeek} />
        <Text>{yearMonth}</Text>
        <Button title=">" onPress={wrap ? nextMonth : nextWeek} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CalendarHeader windowWidth={windowWidth} />
      </View>

      <FlingGestureHandler
        direction={Directions.UP | Directions.DOWN}
        onHandlerStateChange={({nativeEvent}) => {
          if (nativeEvent.state === State.ACTIVE) {
            handlerGesture();
          }
        }}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
            },
            defaultSpringStyles,
          ]}>
          {wrap ? (
            <CalendarBodyOfMonth
              year={year}
              month={month}
              checkedDate={checkedDate}
              setCheckedDate={setCheckedDate}
              windowWidth={windowWidth}
            />
          ) : (
            <CalendarBodyOfWeek
              date={date}
              checkedDate={checkedDate}
              setCheckedDate={setCheckedDate}
              windowWidth={windowWidth}
            />
          )}
        </Animated.View>
      </FlingGestureHandler>
    </View>
  );
};

export default CalendarScreen;
