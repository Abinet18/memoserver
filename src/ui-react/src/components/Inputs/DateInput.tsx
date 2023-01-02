import { parse, format } from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';
import { dateStyles } from '../styles/styles';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  selectedDate: string;
  onChange: (dateStr: string) => void;
  label: string;
};
const dateFormat = 'yyyy/MM/dd';
const DateInput = ({ selectedDate, onChange, label }: Props) => {
  const classes = dateStyles();
  return (
    <DatePicker
      dateFormat={dateFormat}
      selected={
        selectedDate ? parse(selectedDate ?? '', dateFormat, new Date()) : null
      }
      onChange={(date: Date) => {
        onChange(format(date, dateFormat));
      }}
      className={classes.datePicker}
      wrapperClassName={classes.wrapper}
    />
  );
};

export default DateInput;
