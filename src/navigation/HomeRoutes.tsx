import React, {Fragment} from 'react';
import TopTabs from './topTabsNavigation';
import Home from '../screens/Home';
import AddTodoButton from '../components/AddTodoButton';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationListProps} from './stackNavigation';

const HomeRoutes = () => {
  const todoDraft = useSelector((state: RootState) => state.todoDraft);
  const navigation = useNavigation<RootStackNavigationListProps>();
  if (todoDraft.isHasDraft) {
    navigation.navigate('AddTodo');
  }
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
