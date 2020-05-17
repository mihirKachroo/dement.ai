import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import CameraPage from './camera.page';

export default function makeMemory() {
  const [value, onChangeText] = React.useState('Add a sentence describing this memory');
  return (
<View style={{ flex: 1 }}>
<HeaderBar pageName={"Make a Memory"} />

      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
            <CameraPage />
    </View>
  );
}
