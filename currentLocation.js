import React, {useState, useEffect} from 'react';
import { View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import {Marker,UrlTile} from 'react-native-maps';
import Geojson from 'react-native-geojson';

const cLocation = ({ navigation }) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            // Asks the user to grant permissions for geolocation
            // while the app is in the foreground.
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location); // refresh UI
        })(); // need () before ; a mystery.
    }, []); // end of useEffect. array of props optional. 


    return (
        <View>
            {location == null ? <View></View> : <MapView style = {{alignSelf: 'stretch' , height: "70%"}} region = {{latitude: location.coords.latitude, longitude : location.coords.longitude, latitudeDelta : 0.005, longitudeDelta : 0.005}}>
                <Marker
                title='Current Location'
                coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}}
                pinColor= 'aqua'>
                </Marker>
                </MapView>}
            <Text>{JSON.stringify(location)}</Text>
        </View>
    );
}

export default cLocation;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
  });