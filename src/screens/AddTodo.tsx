import {View, Button} from 'react-native';
import React, {useState} from 'react';
import {Todo as TodoClass} from '../classes/Todo';
import DatePicker from 'react-native-date-picker';
import {dateTimeToString, strDateTimeToDateTime} from '../utils/dateTime';

const AddTodo = () => {
  const [date, setDate] = useState(dateTimeToString(new Date()));
  const [open, setOpen] = useState(false);

  console.log(date);

  const testTodo = new TodoClass(
    'kv smanfs nfbnksdnmas nmnss mn.m nbbm,sm dbnv,kas mdmsdnmc,ds ksjskjbjbvckjns,cnknajk cjsabzx dAHJSgckSAJ<bc kj.s,zb cjksd',
    '',
    date,
  ).validate();

  console.log(testTodo);
  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={strDateTimeToDateTime(date)}
        onConfirm={date => {
          // console.log(date.toISOString());
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
