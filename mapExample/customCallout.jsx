//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const CustomCallout = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <Text>Description</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default CustomCallout;
