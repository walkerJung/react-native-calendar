import React from 'react';
import {Text} from 'react-native';

const CalendarHeader = ({windowWidth}) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  return week.map(day => (
    <Text
      style={{
        color: day === '토' ? 'blue' : day === '일' ? 'red' : 'black',
        width: Math.floor(windowWidth / 7),
        textAlign: 'center',
      }}>
      {day}
    </Text>
  ));
};

export default CalendarHeader;
