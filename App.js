import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {Marker, UrlTile} from 'react-native-maps';
import Geojson from 'react-native-geojson';

const App = () => {

    const [mapRegion, setmapRegion] = useState({
        latitude: 39.99713282460591,
        longitude: -81.73703643102041,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });
    return(
        <View style={StyleSheet.container}>
            <MapView
                style={{ alignSelf: 'stretch', height:'70%'}}
                region={mapRegion}>
                  <Marker
                    pinColor="green"
                    title="Hey!!"
                    description="You there!"
                    coordinate={{latitude: 39.99713282460591, longitude: -81.73703643102041}} />
                </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
export default App;
