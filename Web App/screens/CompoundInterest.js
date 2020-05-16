import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";

export default function CompoundInterest() {
  const [amount, setAmount] = useState("");
  const [compoundingTPY, setCompoundingTPY] = useState("");
  const [yearCount, setYearCount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [compoundInterest, setCompoundInterest] = useState([0, 0]);
  function calculateCompoundInterest() {
    const result = (
      amount *
      Math.pow(
        1 + parseFloat(interestRate) / (parseFloat(compoundingTPY) * 100),
        parseFloat(compoundingTPY) * parseFloat(yearCount)
      )
    ).toFixed(2);
    isNaN(result)
      ? setCompoundInterest([0, 0])
      : setCompoundInterest([result, result - amount]);
  }
  useEffect(() => {
    calculateCompoundInterest();
  }, [amount, compoundingTPY, yearCount, interestRate]);
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar pageName={"Compound Interest Calculator"} />
      <Text style={{ fontWeight: "bold", fontSize: 15, textAlign: "center" }}>
        The Compound Interest Calculator Enables you to plan your Retirement
        NestEgg.
      </Text>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            label={"Amount ($)"}
            value={amount}
            mode={"outlined"}
            keyboardType={"numeric"}
            onChangeText={(text) => setAmount(text)}
          />
          <TextInput
            label={"Compounding Times/Yr"}
            value={compoundingTPY}
            mode={"outlined"}
            keyboardType={"number-pad"}
            onChangeText={(text) => setCompoundingTPY(text)}
          />
          <TextInput
            label={"Number of Years"}
            value={yearCount}
            mode={"outlined"}
            keyboardType={"number-pad"}
            onChangeText={(text) => setYearCount(text)}
          />
          <TextInput
            label={"Interest Rate (%)"}
            value={interestRate}
            mode={"outlined"}
            keyboardType={"numeric"}
            onChangeText={(text) => setInterestRate(text)}
          />
          <View style={styles.result}>
            {/* <button onClick={() => calculateCompoundInterest()}>
              Calculate
            </button> */}
            {
              /* <Text
              style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
            >
              Your Retirement account will contain
            </Text>*/
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                ${compoundInterest[1]}
              </Text>
            }
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    width: 250,
  },
  result: {
    alignItems: "center",
    marginTop: 50,
  },
});
