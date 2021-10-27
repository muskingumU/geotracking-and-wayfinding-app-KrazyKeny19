import React from 'react';
import { View, StyleSheet,Text, Dimensions, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const homeScreen = ({navigation}) =>{
    return(
        <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> Home Screen </Text>
            <Button title="Current Location"
            onPress={() => navigation.navigate("Current Location")}/>
            <Button title="Muskingum University"
            onPress={() => navigation.navigate("Muskingum University")}/>
        </View>
    )
}
export default homeScreen;