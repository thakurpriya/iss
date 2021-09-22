
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/homescreen';
import IssLocationScreen from './screen/isslocationscreen';
import MeteorScreen from './screen/meteorscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator()


class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
   
      </Stack.Navigator>
    </NavigationContainer>
  );}
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
