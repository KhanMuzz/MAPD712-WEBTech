import React from 'react';
import {StyleSheet,View,Text,} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const MapApp = () => {
  return (

    <MapView style={styles.mainContainer}
    provider={PROVIDER_GOOGLE}
    style={styles.map}
region={{
latitude: 37.78825,
longitude: -122.4324,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
}}
/>
  );
};
const styles = StyleSheet.create({
                    mainContainer: {
                      ...StyleSheet.absoluteFillObject,
                      height:400
                    },
                    map: {
                      ...StyleSheet.absoluteFillObject
                    }
});

export default MapApp;
