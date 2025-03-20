import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackNavigationList = {
  Home: undefined,
  AddTodo: undefined,
}
export type RootStackNavigationListProps = NativeStackNavigationProp<RootStackNavigationList>

const Stack = createNativeStackNavigator<RootStackNavigationList>();

export default Stack;
