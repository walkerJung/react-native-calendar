import React from 'react';
import {Text, View, Button} from 'react-native';

const CalendarHeader = ({
  yearMonth,
  wrap,
  prevMonth,
  prevWeek,
  nextMonth,
  nextWeek,
  windowWidth,
}) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <>
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
        {week.map((day, idx) => (
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
        ))}
      </View>
    </>
  );
};

export default CalendarHeader;
