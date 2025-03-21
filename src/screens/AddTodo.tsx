import {View, Button, ButtonText, Box} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import Todo from '../classes/Todo';
import {Todo as TodoType} from '../types/Todo';
import DatePicker from 'react-native-date-picker';
import {dateTimeToString, strDateTimeToDateTime} from '../utils/dateTime';
import CustomeInputField from '../components/CustomeInputField';
import {TodoError} from '../types/todo';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store/store';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationListProps} from '../navigation/stackNavigation';
import {addTodo} from '../redux/slices/todoSlices';

const AddTodo = () => {
  const [date, setDate] = useState(
    dateTimeToString(new Date(new Date().getTime() + 30 * 60000)),
  );
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [errors, setErrors] = useState<TodoError>({
    title: null,
    description: null,
    dueDate: null,
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<RootStackNavigationListProps>();

  const todoList = useSelector((state: RootState) => state);
  console.log(todoList);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  const handleConfirm = (date: Date) => {
    setDate(dateTimeToString(date));
  };

  const handleAddTodo = () => {
    const newTodoObj = new Todo(title, description, date);
    const newTodoError = newTodoObj.validate();

    setErrors(newTodoError);
    if (newTodoError.checkErrors()) {
      return;
    }
    const newTodo: TodoType = {
      id: newTodoObj.id,
      title: newTodoObj.title,
      description: newTodoObj.description,
      dueDate: newTodoObj.dueDate,
      isCompleted: newTodoObj.isCompleted,
    };

    dispatch(addTodo(newTodo));
    navigation.goBack();
  };

  return (
    <View w={'$full'}>
      <DatePicker
        modal
        open={open}
        date={strDateTimeToDateTime(date)}
        minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={handleOpen}
      />
      <Box m="$6">
        <CustomeInputField
          type="text"
          label="Title"
          placeholder="Enter Title"
          value={title}
          setter={setTitle}
          helperText="Title must be 2 min characters and 50 max"
          error={errors.title}
        />
        <CustomeInputField
          fieldType="text-area"
          type="text"
          label="Description"
          placeholder="Enter Description"
          value={description}
          setter={setDescription}
          helperText="Description must be 2 min characters and 100 max"
          error={errors.description}
        />
        <CustomeInputField
          fieldType="date-time"
          type="text"
          label="Date"
          placeholder="Choose a date and time"
          value={date}
          error={errors.dueDate}
          onPress={handleOpen}
        />

        <Button size="lg" mt={'$4'} onPress={handleAddTodo}>
          <ButtonText>Add Todo</ButtonText>
        </Button>
      </Box>
    </View>
  );
};

export default AddTodo;
