//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

// create a component
const CustomMarker = () => {
  return (
    <View>
      <Image
        source={require('./user.png')}
        style={{
          width: 50,
          height: 50,
        }}
      />
    </View>
  );
};

//make this component available to the app
export default CustomMarker;
