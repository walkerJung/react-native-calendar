import React, {useEffect, useState} from 'react';
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

const CalendarBody = ({
  year,
  month,
  wrap,
  date,
  checkedDate,
  setCheckedDate,
  windowWidth,
}) => {
  const _date = new Date(year, month, 1);
  const monthStart = wrap ? startOfMonth(_date) : date;
  const weekLength = getWeeksInMonth(monthStart);
  const weekStart = startOfWeek(monthStart, {weekStartsOn: 0});
  const weekList = [];
  const [dateList, setDateList] = useState([]);

  const handleMonthDate = () => {
    for (let i = 0; i < weekLength * 7; i++) {
      const tempDate = addDays(weekStart, i);

      if (checkedDate === format(tempDate, 'MM/dd/yyyy')) {
        weekList.push({
          isToday: true,
          day: getDate(tempDate),
          date: tempDate,
        });
      } else if (getMonth(tempDate) === month) {
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
    setDateList([...weekList]);
  };

  const handleWeekDate = () => {
    for (let i = 0; i < 7; i++) {
      const tempDate = addDays(weekStart, i);
      if (checkedDate === format(tempDate, 'MM/dd/yyyy')) {
        weekList.push({
          isToday: true,
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
    setDateList([...weekList]);
  };

  useEffect(() => {
    wrap ? handleMonthDate() : handleWeekDate();
  }, [year, month, wrap, date]);

  if (!dateList.length) {
    return <Text>달력데이터를 불러오는중 오류가 발생하였습니다.</Text>;
  }

  return dateList.map((item, idx) => (
    <Text
      key={idx}
      style={{
        width: Math.floor(windowWidth / 7),
        height: 50,
        textAlign: 'center',
        backgroundColor: item.isToday && '#d0d7f2',
        borderColor: item.isToday && '#3f51b5',
        opacity: item.isPrevOrNext && wrap ? 0.3 : 1,
      }}
      onPress={() => setCheckedDate(format(item.date, 'MM/dd/yyyy'))}>
      {item.day}
    </Text>
  ));
};

export default CalendarBody;
