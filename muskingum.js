import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Image, StyleSheet, Dimensions, Touchable, Text, FlatList, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Geojson from 'react-native-geojson';




const muskingum = ({navigation}) => {

  const [locations, setLocations] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedBuilding, setselectedBuilding] = useState(null);

  var buildings =  [
    {
        "name": "Boyd Science Center",
        "long": -81.736699,
        "lat": 39.997335,
        "id": 0
    },
    {
        "name": "Montgomery Hall",
        "long": -81.737243,
        "lat": 39.996533,
        "id": 1
    },
    {
        "name": "Cambridge Hall",
        "long": -81.737661,
        "lat": 39.996985,
        "id": 2
      },
    {
        "name": "Caldwell Hall",
        "long": -81.737665,
        "lat": 39.996087,
        "id": 3
    },
    {
        "name": "Walter Hall",
        "long": -81.734981,
        "lat": 39.995956,
        "id": 4
    },
    {
        "name": "Neptune Center",
        "long": -81.733504,
        "lat": 39.995318,
        "id": 5
    },
    {
        "name": "Louis O. Palmer Art Gallery",
        "long": -81.733994,
        "lat": 39.995272,
        "id": 6
    },
    {
        "name": "Paul Hall",
        "long": -81.7344564,
        "lat": 39.995359,
        "id": 7
    },
    {
        "name": "Anne C. Steel Recreation Center",
        "long": -81.737976,
        "lat": 39.998062,
        "id": 8
        },
    {
        "name": "John Glenn Gym",
        "long": -81.737359,
        "lat": 39.99814, 
        "id": 9
    },
    {
        "name": "Roberta A. Smith University Library",
        "long": -81.737129,
        "lat": 39.995561,
        "id": 10
    },
    {
        "name": "Chess Center",
        "long": -81.736483,
        "lat": 40.000417,
        "id": 11
    },
    {
        "name": "Quad Center",
        "long": -81.737715,
        "lat": 39.99761,
        "id": 12
    },
    {
        "name": "Bookstore",
        "long": -81.737735,
        "lat": 39.997455,
        "id": 13
    },
    {
        "name": "Brown Chapel",
        "long": -81.736143,
        "lat": 39.996605,
        "id": 14
    },
    {
        "name": "Wellness Center",
        "long": -81.733974,
        "lat": 39.997637,
        "id": 15
    },
    {
        "name": "University Police",
        "long": -81.73839,
        "lat": 39.99751,
        "id": 16
    },
    {
        "name": "Kelley Hall",
        "long": -81.735803,
        "lat": 40.00071,
        "id": 17
    },
    {
        "name": "Patton Hall",
        "long": -81.735558,
        "lat": 40.000307,
        "id": 18
        
    },
    {
        "name": "Finney Hall",
        "long": -81.734558,
        "lat": 40.000543,
        "id": 19
    },
    {
        "name": "Moore Hall",
        "long": -81.73813,
        "lat": 40.00057,
        "id": 20
    },
    {
        "name": "Memorial Hall",
        "long": -81.738363,
        "lat": 40.000252,
        "id":21 
    },
    {
        "name": "Thomas Hall",
        "long": -81.739667,
        "lat": 40.000198,
        "id": 22
    },
    {
        "name": "Town House A",
        "long": -81.741351,
        "lat": 39.999172,
        "id": 23
    },
    {
        "name": "Town House B",
        "long": -81.742083,
        "lat": 39.999367,
        "id": 24
    },
    {
        "name": "Lakeside Houses",
        "long": -81.734463,
        "lat": 39.998942,
        "id": 25
    },
    {
        "name": "Kappa Sigma",
        "long": -81.741535,
        "lat": 40.001501,
        "id": 26
    },
    {
        "name": "Phi Kappa Tau",
        "long": -81.741339,
        "lat": 40.001001,
        "id": 27
    },
    {
        "name": "MACE",
        "long": -81.7410324,
        "lat": 40.0018945,
        "id": 28
    },
    {
        "name": "Ulster House",
        "long": -81.740415,
        "lat": 39.998928,
        "id": 29
    },
    {
        "name": "Stag Club",
        "long": -81.739657,
        "lat": 39.998428,
        "id": 30
        
    },
    {
        "name": "Lexington Arms",
        "long": -81.738887,
        "lat": 39.994853,
        "id": 31
    },
    {
        "name": "Kianu Club",
        "long": -81.740256,
        "lat": 39.997798,
        "id": 32
    }
];

  useEffect(() => {
    (async () => {
        // Asks the user to grant permissions for geolocation
        // while the app is in the foreground.
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let loc = await Location.watchPositionAsync(
          {accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 10000,
        distanceInterval: 2},
        (location) => {
         // Alert.alert(location.stringify());
          let temp = locations
          temp.push({latitude:location.coords.latitude, longitude:location.coords.longitude})
          setLocations(temp);
        }
         ); // refresh UI
    })(); // need () before ; a mystery.
}, []); // end of useEffect. array of props optional. 

    const [mapRegion, setmapRegion] = useState({
        latitude: 39.99805700390604,
        longitude: -81.73781823561002,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });  
    const renderBuilding= ({item})=> {
      const backgroundColor1 = item.id === selectedBuilding ?
        "aqua": "white";
      const color1 = item.id === selectedBuilding ?
        'white':'black';
        return(
          <TouchableOpacity
            onPress={()=> setselectedBuilding(item.id)}
            style={[styles.item, {backgroundColor:backgroundColor1}]}>
              <Text style={[styles.title,{color:color1}]}>{item.name}
              </Text>
            </TouchableOpacity>
        )
    };

    return(
        <View style={styles.container}>
            <MapView style={{ alignSelf:'stretch', height:'70%' }} 
            region={mapRegion}>

            {locations.map((location, index) => (
            <Marker
            key = {index}
            title="You"
            coordinate= {location}
            pinColor= 'aqua'/>))
            }
          {selectedBuilding == null? <View></View>: 
          <Marker
          title = {buildings[selectedBuilding].name}
          coordinate={{latitude : buildings[selectedBuilding].lat, longitude:buildings[selectedBuilding].long}}
          pinColor = "magenta"/>}
            </MapView>
            <FlatList data={buildings}
            renderItem={renderBuilding}
            keyExtractor={(item) => item.id}
            extraData = {selectedBuilding} />
        </View>
    );
};

export default muskingum;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item:{
      padding:20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title:{
      fontSize:32,
    },
  });
