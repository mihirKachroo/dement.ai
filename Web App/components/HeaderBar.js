import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function HeaderBar({ pageName }) {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.Action
        icon={"menu"}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Appbar.Content title={pageName} />
    </Appbar.Header>
  );
}
