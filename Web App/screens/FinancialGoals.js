import React from "react";
import { Text, View, FlatList } from "react-native";
import { Button, List } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import { Checkbox } from "react-native-paper";

const goals = [
  {
    id: 1,
    name: "Save",
    description: "Save $200K in chequing account",
    completed: true,
  },
  {
    id: 2,
    name: "Acquire",
    description: "Own $500K in real estate",
    completed: true,
  },
  {
    id: 3,
    name: "Save",
    description: "Achieve a net worth of $1M",
    completed: false,
  },
  {
    id: 4,
    name: "Invest",
    description: "Invest at least $250K in all stocks",
    completed: true,
  },
  {
    id: 5,
    name: "Save",
    description: "Save $1M in chequing account",
    completed: false,
  },
  {
    id: 6,
    name: "Invest",
    description: "Profit $50K in all stocks",
    completed: true,
  },
  {
    id: 7,
    name: "Invest",
    description: "Own 2 shares of Google",
    completed: false,
  },
  {
    id: 8,
    name: "Invest",
    description: "Own 4 shares of Amazon",
    completed: false,
  },
  {
    id: 9,
    name: "Invest",
    description: "Profit $30K from the stock market",
    completed: false,
  },
];

export default function FinancialGoals() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar pageName={"Financial Goals"} />
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
          Add Goal
        </Button>
      </View>
    </View>
  );
}
