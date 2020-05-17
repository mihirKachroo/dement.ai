import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import AlertExample from './alert_example.js'

export default function makeMemory() {
  const [value, onChangeText] = React.useState('Describe this image again');
  return (
<View style={{ flex: 1 }}>
<HeaderBar pageName={"Make a Memory"} />

      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <br></br>
    <br></br>
    <br></br>
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('./random.png')}
      />
    </View>   
    <br></br>   
    <AlertExample />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
});

