//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';

// create a component
const MapExample = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MapExample;
