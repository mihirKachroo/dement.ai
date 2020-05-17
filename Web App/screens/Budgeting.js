import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet,Alert  } from "react-native";
import { TextInput, Button } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import AlertExample from './alert_example.js'

export default function makeMemory() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Submitted",
      "You got a score of 29% on this test",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  const [value, onChangeText] = React.useState('Describe this image again');
  return (
<View style={{ flex: 1 }}>
<HeaderBar pageName={"Test a Memory"} />

      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('./random.png')}
      />
    </View>   
  
    <Button title={"Submit"} onPress={createTwoButtonAlert}>Submit</Button>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  container2: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  stretch: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
});

