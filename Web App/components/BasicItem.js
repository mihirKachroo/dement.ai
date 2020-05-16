import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, List, Surface } from "react-native-paper";

export default function BasicItem({ item }) {
  let dataType = "";
  for (let i = 0; i < item.type.length; i++) {
    i === 0 ? dataType += item.type[i].toUpperCase() : dataType += item.type[i];
  }
  return (
    <Surface style={styles.item}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{dataType}</Text>
      <Text>${item.value}</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    elevation: 4,
  },
});
