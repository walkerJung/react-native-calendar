import React, {useState} from 'react';
import {Button, Text, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {
  getMonth,
  startOfMonth,
  getWeeksInMonth,
  startOfWeek,
  addDays,
  getDate,
  format,
} from 'date-fns';

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

const CalendarBody = ({year, month, windowWidth}) => {
  const _date = new Date(year, month - 1, 1);
  const monthStart = startOfMonth(_date);
  const weekLength = getWeeksInMonth(monthStart);
  const weekStart = startOfWeek(monthStart, {weekStartsOn: 0});
  const weekList = [];

  for (let i = 0; i < weekLength * 7; i++) {
    const tempDate = addDays(weekStart, i);
    const today = format(new Date(), 'MM/dd/yyyy');

    if (today === format(tempDate, 'MM/dd/yyyy')) {
      weekList.push({
        isToday: true,
        day: getDate(tempDate),
      });
    } else if (getMonth(tempDate) + 1 === month) {
      weekList.push({
        isPrevOrNext: false,
        day: getDate(tempDate),
      });
    } else {
      weekList.push({
        isPrevOrNext: true,
        day: getDate(tempDate),
      });
    }
  }

  return weekList.map((item, idx) => (
    <Text
      key={idx}
      style={{
        width: Math.floor(windowWidth / 7),
        textAlign: 'center',
        borderWidth: item.isToday && 1,
        borderRadius: item.isToday && 10,
        borderStyle: item.isToday && 'solid',
        borderColor: item.isToday && 'purple',
        opacity: item.isPrevOrNext ? 0.3 : 1,
      }}
      onPress={() => console.log('@TODO - click event')}>
      {item.day}
    </Text>
  ));
};

const CalendarScreen = () => {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const yearMonth = year + '년' + ' ' + month + '월';
  const windowWidth = Dimensions.get('window').width;

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
        <CalendarBody year={year} month={month} windowWidth={windowWidth} />
      </View>
    </View>
  );
};

export default CalendarScreen;
