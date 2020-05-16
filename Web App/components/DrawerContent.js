import React, { useState } from "react";
import { Text, View, StatusBar, StyleSheet, ScrollView } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Drawer, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerContent({ navigation }) {
  const [selected, setSelected] = useState("Home");
  function selectItem(item) {
    setSelected(item);
    navigation.navigate(item);
  }
  return (
    <ScrollView style={{ marginTop: StatusBar.currentHeight }}>
      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 30 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image
            size={85}
            source={{
              uri: "https://i.stack.imgur.com/l60Hf.png",
            }}
          />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>John Doe</Text>
          </View>
        </View>
      </View>
      <Drawer.Section title={"You"} style={styles.section}>
        <DrawerItem
          icon={({ focused, color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={focused ? "view-dashboard" : "view-dashboard-outline"}
            />
          )}
          label={"Overview"}
          onPress={() => selectItem("Home")}
          focused={selected === "Home"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name={"target"} />
          )}
          label={"Financial Goals"}
          onPress={() => selectItem("Goals")}
          focused={selected === "Goals"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"format-list-bulleted"}
            />
          )}
          label={"My transactions"}
          onPress={() => selectItem("Transaction")}
          focused={selected === "Transaction"}
        />
      </Drawer.Section>
      <Drawer.Section title={"Tools"} style={styles.section}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"calculator"}
            />
          )}
          label={"Compound Interest Calc"}
          onPress={() => selectItem("CompoundInterest")}
          focused={selected === "CompoundInterest"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"book-open"}
            />
          )}
          label={"Budgeting"}
          onPress={() => selectItem("Budgeting")}
          focused={selected === "Budgeting"}
        />
        
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name={"bank"} />
          )}
          label={"Bank Reconciliations"}
          onPress={() => selectItem("BankReconciliations")}
          focused={selected === "BankReconciliations"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"google-analytics"}
            />
          )}
          label={"Analytics"}
          onPress={() => selectItem("Analytics")}
          focused={selected === "Analytics"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"library-books"}
            />
          )}
          label={"Did you Know"}
          onPress={() => selectItem("DidYouKnow")}
          focused={selected === "DidYouKnow"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"help-box"}
            />
          )}
          label={"Help & Feedback"}
          onPress={() => selectItem("Help")}
          focused={selected === "Help"}
        />
      </Drawer.Section>
      <Drawer.Section title={"User"}>
      <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"calculator"}
            />
          )}
          label={"Your Information"}
          onPress={() => selectItem("MergeBudgets")}
          focused={selected === "MergeBudgets"}
        />
        
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"office-building"}
            />
          )}
          label={"Log In"}
          onPress={() => selectItem("logIn")}
          focused={selected === "logIn"}
        />
      </Drawer.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingBottom: 20,
  },
});
