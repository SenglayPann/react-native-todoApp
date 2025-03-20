import Home from '../screens/Home';
import HomeRoutes from './HomeRoutes';
import Stack from './stackNavigation';

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeRoutes} />
    </Stack.Navigator>
  );
};

export default Routes;
