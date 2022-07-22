import React from 'react';
import {Text} from 'react-native';
import {
  getMonth,
  startOfMonth,
  getWeeksInMonth,
  startOfWeek,
  addDays,
  getDate,
  format,
} from 'date-fns';

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

export default CalendarBody;
