import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Image, StyleSheet, Dimensions, Touchable, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Geojson from 'react-native-geojson';




const muskingum = ({navigation}) => {

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

    const [mapRegion, setmapRegion] = useState({
        latitude: 39.99805700390604,
        longitude: -81.73781823561002,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });  

    return(
        <View style={styles.container}>
            <MapView style={{ alignSelf:'stretch', height:'70%' }} 
            region={mapRegion}>
            {location == null ? <View></View>: <Marker
            title='You'
            coordinate= {{longitude: location.coords.longitude, latitude: location.coords.latitude}}
            pinColor= 'aqua'>
            </Marker>}
            </MapView>
        </View>
    );
};

export default muskingum;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
