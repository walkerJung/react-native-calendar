import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const CalendarScreen = () => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const yearMonth = selectedYear + '년' + ' ' + selectedMonth + '월';
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

  const prevMonth = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const nextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
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
    </View>
  );
};

export default CalendarScreen;
