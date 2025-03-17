//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import CustomMarker from './customMarker';

// create a component
const MapExample = () => {
  const markers = [
    {
      title: 'Konum 1',
      description: 'Aciklama 1',
      coordinate: {
        latitude: 41.0299551,
        longitude: 29.0547955,
      },
    },
    {
      title: 'Konum 2',
      description: 'Aciklama 2',
      coordinate: {
        latitude: 41.0266902,
        longitude: 29.0473901,
      },
    },
    {
      title: 'Konum 3',
      description: 'Aciklama 3',
      coordinate: {
        latitude: 41.027005,
        longitude: 29.0502414,
      },
    },
  ];
  return (
    <MapView
      // mapType="satellite"
      showsUserLocation
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 41.0053683,
        longitude: 29.0547955,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          title={marker.title}
          description={marker.description}
          coordinate={marker.coordinate}>
          <CustomMarker />
        </Marker>
      ))}
    </MapView>
  );
};

// define your styles
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

//make this component available to the app
export default MapExample;
