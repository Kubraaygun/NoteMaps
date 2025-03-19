//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {
  Callout,
  Marker,
  Polygon,
  Polyline,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import CustomCallout from './customCallout';
import {MapTypes} from './constants';
import {Map1} from 'iconsax-react-native';

// create a component
const MapExample = () => {
  const [markers, setMarker] = useState([]);
  const [mapType, setMapType] = useState(MapTypes.STANDARD);
  const [latlng, setlatlng] = useState({
    latitude: 41.027005,
    longitude: 29.0502414,
  });
  const setCustomMapType = () => {
    switch (mapType) {
      case MapTypes.STANDARD:
        setMapType(MapTypes.HYBRID);
        break;
      case MapTypes.HYBRID:
        setMapType(MapTypes.HYBRID_FLYOVER);
        break;
      case MapTypes.HYBRID_FLYOVER:
        setMapType(MapTypes.MUTEDSTANDARD);
        break;
      case MapTypes.MUTEDSTANDARD:
        setMapType(MapTypes.SATELLITE);
        break;
      case MapTypes.SATELLITE:
        setMapType(MapTypes.TERRAIN);
        break;
      default:
        setMapType(MapTypes.STANDARD);
        break;
    }
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        scrollEnabled={true}
        onPress={values =>
          setMarker([...markers, values.nativeEvent.coordinate])
        }
        mapType={mapType}
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
            <Callout>
              <CustomCallout />
            </Callout>
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
      </MapView>
      <TouchableOpacity
        onPress={() => setCustomMapType()}
        style={{
          width: 70,
          height: 70,
          backgroundColor: 'white',
          borderRadius: 100,
          bottom: 30,
          right: 30,
          position: 'absolute',
          justifyContent: 'center', // Yatayda ortalamak
          alignItems: 'center',
        }}>
        <Text>Maps</Text>
      </TouchableOpacity>
      <View
        style={{
          width: 150,
          position: 'absolute',
          top: 10,
          left: 10,
          paddingVertical: 10,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text>{mapType}</Text>
      </View>
    </View>
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
