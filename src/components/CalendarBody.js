import React, {useState} from 'react';
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
  const [checkedDate, setCheckedDate] = useState(
    format(new Date(), 'MM/dd/yyyy'),
  );
  const _date = new Date(year, month - 1, 1);
  const monthStart = startOfMonth(_date);
  const weekLength = getWeeksInMonth(monthStart);
  const weekStart = startOfWeek(monthStart, {weekStartsOn: 0});
  const weekList = [];

  for (let i = 0; i < weekLength * 7; i++) {
    const tempDate = addDays(weekStart, i);

    if (checkedDate === format(tempDate, 'MM/dd/yyyy')) {
      weekList.push({
        isToday: true,
        day: getDate(tempDate),
        date: tempDate,
      });
    } else if (getMonth(tempDate) + 1 === month) {
      weekList.push({
        isPrevOrNext: false,
        day: getDate(tempDate),
        date: tempDate,
      });
    } else {
      weekList.push({
        isPrevOrNext: true,
        day: getDate(tempDate),
        date: tempDate,
      });
    }
  }

  return weekList.map((item, idx) => (
    <Text
      key={idx}
      style={{
        width: Math.floor(windowWidth / 7),
        height: 50,
        textAlign: 'center',
        backgroundColor: item.isToday && '#d0d7f2',

        borderColor: item.isToday && '#3f51b5',
        opacity: item.isPrevOrNext ? 0.3 : 1,
      }}
      onPress={() => setCheckedDate(format(item.date, 'MM/dd/yyyy'))}>
      {item.day}
    </Text>
  ));
};

export default CalendarBody;
