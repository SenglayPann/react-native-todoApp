import {
  View,
  Button,
  ButtonText,
  Box,
  KeyboardAvoidingView,
} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import Todo, {errValue} from '../classes/Todo';
import {Todo as TodoType} from '../types/Todo';
import DatePicker from 'react-native-date-picker';
import {dateTimeToString} from '../utils/dateTime';
import CustomeInputField, {
  CustomeFields,
  CustomeFieldsList,
} from '../components/CustomeInputField';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store/store';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationListProps} from '../navigation/stackNavigation';
import {addTodo} from '../redux/slices/todoSlices';
import {clearTodoDraft, setTodoDraft} from '../redux/slices/todoDraftSlice';
import {
  AppState,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import newTodoInitialState from '../mockData/newTodoSates';

const AddTodo = () => {
  const todoDraft = useSelector((state: RootState) => state.todoDraft);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<RootStackNavigationListProps>();

  const [states, setStates] = useState<CustomeFieldsList>(newTodoInitialState);

  const handleSetState = (
    label: string,
    field: keyof CustomeFields,
    value: string | errValue,
  ) => {
    setStates(prevStates =>
      prevStates.map(state =>
        state.label.toUpperCase() === label.toUpperCase()
          ? {...state, [field]: value}
          : state,
      ),
    );
  };

  useEffect(() => {
    if (todoDraft.isHasDraft) {
      setStates(prevStates =>
        prevStates.map(state => {
          if (state.label.toUpperCase() === 'TITLE') {
            return {...state, value: todoDraft.draft.title};
          }
          if (state.label.toUpperCase() === 'DESCRIPTION') {
            return {...state, value: todoDraft.draft.description};
          }
          if (state.label.toUpperCase() === 'DUEDATE') {
            return {...state, value: todoDraft.draft.dueDate};
          }
          return state;
        }),
      );
    }
  }, [todoDraft]);

  useEffect(() => {
    const unsubcribtion = navigation.addListener('beforeRemove', () => {
      dispatch(clearTodoDraft());
    });

    return unsubcribtion;
  }, [dispatch, navigation]);

  useEffect(() => {
    const handleAppStatusChange = (nextAppState: string) => {
      if (nextAppState !== 'active') {
        const newDraftTodo = new Todo(
          states[0].value,
          states[1].value,
          states[2].value,
        );

        if (!newDraftTodo.validate().checkErrors()) {
          dispatch(setTodoDraft(newDraftTodo.generateNewInformalObject()));
        }
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStatusChange,
    );
    return () => {
      subscription.remove();
    };
  }, [states]);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  const handleConfirm = (selectedDate: Date) => {
    handleSetState('Date', 'value', dateTimeToString(selectedDate));
    setOpen(false);
  };

  const handleAddTodo = () => {
    const newTodoObj = new Todo(
      states[0].value,
      states[1].value,
      states[2].value,
    );

    const newTodoError = newTodoObj.validate();

    handleSetState('title', 'error', newTodoError.title);
    handleSetState('description', 'error', newTodoError.description);
    handleSetState('dueDate', 'error', newTodoError.dueDate);
    if (newTodoError.checkErrors()) {
      return;
    }
    const newTodo: TodoType = newTodoObj.generateNewInformalObject();

    dispatch(clearTodoDraft());
    dispatch(addTodo(newTodo));

    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  const handleClearForm = () => {
    setStates(newTodoInitialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View w={'$full'}>
          <DatePicker
            modal
            open={open}
            date={new Date(new Date().getTime() + 30 * 60000)}
            minimumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={handleOpen}
          />
          <Box m="$6">
            {states.map((state: CustomeFields) => (
              <CustomeInputField
                key={state.label}
                fieldType={state.fieldType}
                type={state.type}
                label={state.label}
                placeholder={state.placeholder}
                value={state.value}
                setter={handleSetState}
                helperText={state.helperText}
                error={state.error}
                onPress={
                  state.fieldType === 'date-time' ? handleOpen : () => null
                }
              />
            ))}

            <Button
              size="lg"
              mt={'$4'}
              bgColor="$red500"
              onPress={handleClearForm}>
              <ButtonText>Reset</ButtonText>
            </Button>
            <Button size="lg" mt={'$4'} onPress={handleAddTodo}>
              <ButtonText>Add Todo</ButtonText>
            </Button>
          </Box>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddTodo;
