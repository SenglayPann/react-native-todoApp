import AddTodo from '../screens/AddTodo';
import HomeRoutes from './HomeRoutes';
import Stack from './stackNavigation';

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeRoutes} />
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
  );
};

export default Routes;
