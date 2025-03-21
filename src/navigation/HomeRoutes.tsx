import React, {Fragment} from 'react';
import TopTabs from './topTabsNavigation';
import Home from '../screens/Home';
import AddTodoButton from '../components/AddTodoButton';

const HomeRoutes = () => {
  return (
    <Fragment>
      <TopTabs.Navigator>
        <TopTabs.Screen name="All" component={Home} />
        <TopTabs.Screen name="Completed" component={Home} />
        <TopTabs.Screen name="Incompleted" component={Home} />
      </TopTabs.Navigator>
      <AddTodoButton />
    </Fragment>
  );
};

export default HomeRoutes;
