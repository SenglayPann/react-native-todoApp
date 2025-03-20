import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export type RootTopTabList = {
  All: undefined,
  Completed: undefined,
  Incompleted: undefined,
}

const TopTabs = createMaterialTopTabNavigator<RootTopTabList>();

export default TopTabs;
