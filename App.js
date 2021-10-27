import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import {Marker, UrlTile} from 'react-native-maps';
import Geojson from 'react-native-geojson';
import homeScreen from './HomeScreen';
import cLocation from './currentLocation';
import muskingum from './muskingum';


const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name="Home Screen"
            component={homeScreen}/>
            <Stack.Screen
            name="Current Location"
            component={cLocation}/>
            <Stack.Screen
            name="Muskingum University"
            component={muskingum}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
export default App;
