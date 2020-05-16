import React from "react";
import { View, Text } from "react-native";

export default function HomeHeading() {
  return (
    <View style={{marginTop: 50, marginBottom: 50, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Welcome, John Doe!</Text>
    </View>
  );
}
