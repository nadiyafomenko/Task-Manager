import React from 'react';
import { StyleSheet, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Modal from 'react-native-modal';

import Header from './components/Header';
import MondayScreen from './components/Screen';
import TuesdayScreen from './components/Screen';
import WednesdayScreen from './components/Screen';
import ThursdayScreen from './components/Screen';
import FridayScreen from './components/Screen';
import SaturdayScreen from './components/Screen';
import SundayScreen from './components/Screen';


const Tab = createMaterialTopTabNavigator();




export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Header></Header>
        <NavigationContainer>
        <Tab.Navigator
         tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: 'white',
          style:{
            backgroundColor: '#3c435e',
          },
          tabStyle: {
             height: 60,
             
          },
          labelStyle: {
             fontSize: 10,
            },
          indicatorStyle:{
            backgroundColor: 'white',
            
          }
         }}
        > 
          <Tab.Screen name="Mon" component={MondayScreen}/>
          <Tab.Screen name="Tue" component={TuesdayScreen} />
          <Tab.Screen name="Wed" component={WednesdayScreen} />
          <Tab.Screen name="Thu" component={ThursdayScreen} />
          <Tab.Screen name="Fri" component={FridayScreen} />
          <Tab.Screen name="Sat" component={SaturdayScreen} />
          <Tab.Screen name="Sun" component={SundayScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c435e', 
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
});
