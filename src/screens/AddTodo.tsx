import {View, Button} from 'react-native';
import React, {useState} from 'react';
import {Todo as TodoClass} from '../classes/todo';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {dateTimeToString, strDateTimeToDateTime} from '../utils/dateTime';

const AddTodo = () => {
  const [date, setDate] = useState(dateTimeToString(new Date()));
  const [open, setOpen] = useState(false);

  console.log(date);

  // const testTodo = new TodoClass('test todo', 'test description');
  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={strDateTimeToDateTime(date)}
        onConfirm={date => {
          console.log(date.toISOString());
          setOpen(false);
          setDate(dateTimeToString(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default AddTodo;
