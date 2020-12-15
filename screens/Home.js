import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Category from './Category';
import Collection from './Collection';
import Filter from './Filter';
import {THEME_COLORS} from '../Theme';

const Tab = createBottomTabNavigator();

const Home = ({params}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: THEME_COLORS.categorycolor,
        inactiveTintColor: '#000000',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Category}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/home.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Collections"
        component={Collection}
        options={{
          tabBarLabel: 'Collections',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/folder.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Filter"
        component={Filter}
        options={{
          tabBarLabel: 'Filter',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/filter.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;
