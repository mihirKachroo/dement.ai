import React, { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import CameraPage from './camera.page';

export default function makeMemory() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View style={{ flex: 1 }}>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <HeaderBar pageName={"Make a Memory"} />
            <CameraPage />
    </View>
  );
}
