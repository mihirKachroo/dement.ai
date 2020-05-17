import React from "react";
import { Text, View, FlatList } from "react-native";
import { Button, List } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import { Checkbox } from "react-native-paper";

const goals = [
  {
    id: 1,
    name: "Add Memories",
    description: "Add 2 Memories",
    completed: true,
  },
  {
    id: 2,
    name: "Go to Physician",
    description: "Go to regular physician check up",
    completed: true,
  },
  {
    id: 3,
    name: "Add Memories",
    description: "Add 4 Memories",
    completed: false,
  },
  {
    id: 4,
    name: "Take Test",
    description: "Take Memory test and scored 75%",
    completed: true,
  },
  {
    id: 5,
    name: "Add Memories",
    description: "Add 14 Memories",
    completed: false,
  },
  {
    id: 6,
    name: "Take Test",
    description: "Take Memory test and scored 75%",
    completed: true,
  },
  {
    id: 7,
    name: "Go to Physician",
    description: "Go to regular physician check up",

    completed: false,
  },
  {
    id: 8,
    name: "Add Memories",
    description: "Add 8 Memories",
    completed: false,
  },
  {
    id: 9,
    name: "Take Test",
    description: "Take Memory test and scored 75%",
    completed: false,
  },
];

export default function FinancialGoals() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar pageName={"Tasks"} />
      <FlatList
        data={goals}
        renderItem={({ item }) => {
          return (
            <List.Item
              title={item.name}
              description={item.description}
              right={() => <Checkbox status={item.completed ? "checked" : "unchecked"} />}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
      <View style={{ justifyContent: "flex-end", margin: 20 }}>
        <Button
          icon={"playlist-plus"}
          onPress={() => {}}
          mode="contained"
          style={{ height: 50, justifyContent: "center" }}
        >
          Add New Task
        </Button>
      </View>
    </View>
  );
}
