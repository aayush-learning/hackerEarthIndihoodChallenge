import React, { Component } from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { connect } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import {record} from './assets/Record';

const ScreenNavigator = new createStackNavigator();


class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
    <NavigationContainer>
    <ScreenNavigator.Navigator initialRouteName="Home"  screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
      }}>
      <ScreenNavigator.Screen name="Home" component={HomeScreen} options={{
          title: '',
        }}  />
      <ScreenNavigator.Screen name="Details" component={DetailScreen} options={{
          title: record.loan1.title,
          headerTitleStyle: {
            fontSize: 14,
          },
        }} />
    </ScreenNavigator.Navigator>
  </NavigationContainer>
  );
  }
}

export default connect(
  null,
  null
)(Routes);
