import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootParamsList = {
  Home: undefined,
  CreateTodo: undefined,
}

const Stack = createNativeStackNavigator<RootParamsList>();

export default Stack;
