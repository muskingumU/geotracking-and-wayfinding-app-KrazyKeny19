import MapView from 'react-native-maps';
import {Marker, UrlTile} from 'react-native-maps';

const  App = () =>{
    const [mapRegion, setmapRegion] = useState({
        latitude: 37.78823,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    return(
        <View style={StyleSheet.container}>
            <MapView
                style={{ alignSelf: 'stretch', heigh:'70%'}}
                region={mapRegion}>
                </MapView>
        </View>
    )
}