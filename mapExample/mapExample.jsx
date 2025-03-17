//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {
  Marker,
  Polygon,
  Polyline,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import CustomMarker from './customMarker';

// create a component
const MapExample = () => {
  const [markers, setMarker] = useState([]);
  console.log(markers);
  return (
    <MapView
      onPress={values => setMarker([...markers, values.nativeEvent.coordinate])}
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
        <Marker key={index} coordinate={marker}>
          <CustomMarker />
        </Marker>
      ))}
      {/* <Polyline
        coordinates={[
          {
            latitude: 41.0299551,
            longitude: 29.0547955,
          },
          {
            latitude: 41.027005,
            longitude: 29.0502414,
          },
        ]}
        strokeColor="red"
        strokeWidth={2}
      /> */}
      {/* <Polygon
        coordinates={[
          {
            latitude: 41.0299551,
            longitude: 29.0547955,
          },
          {
            latitude: 41.027005,
            longitude: 29.0502414,
          },
          {
            latitude: 41.0266902,
            longitude: 29.0473901,
          },
        ]}
        fillColor="black"
        strokeWidth={2}
      /> */}
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
