//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {
  Marker,
  Polygon,
  Polyline,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import CustomMarker from './customMarker';
import CustomCollout from './customCollout';

// create a component
const MapExample = () => {
  const [markers, setMarker] = useState([]);
  const [latlng, setlatlng] = useState({
    latitude: 41.0053683,
    longitude: 29.0547955,
  });
  console.log(markers);
  return (
    <MapView
      scrollEnabled={true}
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
        <Marker
          title="Konum"
          description="Konum 1"
          draggable
          key={index}
          coordinate={marker}>
          <CustomMarker {...marker}>
            <CustomCollout />
          </CustomMarker>
        </Marker>
      ))}

      {/* <Marker
        draggable
        title="Konuum"
        coordinate={latlng}
        onDragEnd={e => setlatlng({x: e.nativeEvent.coordinate})}
      /> */}
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

      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'red',
          borderRadius: 100,
          bottom: 30,
          right: 30,
          position: 'absolute',
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </MapView>
  );
};

// define your styles
const styles = StyleSheet.create({
  map: {
    flex: 1,
    zIndex: 0,
  },
});

//make this component available to the app
export default MapExample;
