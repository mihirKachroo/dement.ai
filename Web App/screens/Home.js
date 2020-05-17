import { Text, FlatList, View, StyleSheet } from "react-native";
import { Card, List } from "react-native-paper";
import React, { useState, useEffect } from "react";
import BasicItem from "../components/BasicItem";
import HeaderBar from "../components/HeaderBar";
import HomeHeading from "../components/HomeHeading";

const user = {
  income: {
    value: 14.32,
  },
  expense: {
    value: 145.3,
  },
  investments: {
    value: 13.4,
  }
};

export default function Home() {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    const arr = [];
    for (let [key, value] of Object.entries(user)) {
      arr.push({
        type: key,
        value: value.value,
      });
    }
    setCardsData(arr);
  }, []);
  return (
    <View>
      <HeaderBar pageName={"Home"} />
      <View style={styles.items}>
        <FlatList
          data={cardsData}
          renderItem={({ item }) => <BasicItem item={item} />}
          keyExtractor={(item) => item.type}
          numColumns={3}
          ListHeaderComponent={HomeHeading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    alignItems: "center",
  },
});
