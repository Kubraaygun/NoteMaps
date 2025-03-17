//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import MapExample from './mapExample/mapExample';

// create a component
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapExample />
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;
