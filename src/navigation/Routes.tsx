import {useSelector} from 'react-redux';
import AddTodo from '../screens/AddTodo';
import HomeRoutes from './HomeRoutes';
import Stack from './stackNavigation';
import {RootState} from '../redux/store/store';

const Routes = () => {
  let initialRouteName = 'Home';
  const todoDraft = useSelector((state: RootState) => state.todoDraft);
  if (!!todoDraft) {
    initialRouteName = 'AddTodo';
  }

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="Home" component={HomeRoutes} />
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
  );
};

export default Routes;
