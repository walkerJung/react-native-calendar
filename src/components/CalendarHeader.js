import React from 'react';
import {Text} from 'react-native';

const CalendarHeader = ({windowWidth}) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  return week.map((day, idx) => (
    <Text
      key={idx}
      style={{
        color: day === '토' ? 'blue' : day === '일' ? 'red' : 'black',
        width: Math.floor(windowWidth / 7),
        textAlign: 'center',
        marginBottom: 10,
      }}>
      {day}
    </Text>
  ));
};

export default CalendarHeader;
