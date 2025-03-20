import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';

export type RootTopTabList = {
  All: undefined,
  Completed: undefined,
  Incompleted: undefined,
}

export type SharedTabRouteProp = RouteProp<RootTopTabList, keyof RootTopTabList>;

const TopTabs = createMaterialTopTabNavigator<RootTopTabList>();

export default TopTabs;
