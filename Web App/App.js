import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home.js";
import makeMemory from "./screens/makeMemory";
import FinancialGoals from "./screens/FinancialGoals";
import DrawerContent from "./components/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTransactions from "./screens/MyTransactions";
import Budgeting from "./screens/Budgeting";
import MergeBudgets from "./screens/MergeBudgets";
import BankReconciliations from "./screens/BankReconciliations";
import Analytics from "./screens/Analytics";
import DidYouKnow from "./screens/DidYouKnow";
import Help from "./screens/Help";
import logIn from "./screens/logIn";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={({ navigation }) => (
          <DrawerContent navigation={navigation} />
        )}
      >
        <Drawer.Screen name={"Home"} component={Home} />
        <Drawer.Screen name={"makeMemory"} component={makeMemory} />
        <Drawer.Screen name={"Goals"} component={FinancialGoals} />
        <Drawer.Screen name={"Transactions"} component={MyTransactions} />
        <Drawer.Screen name={"Budgeting"} component={Budgeting} />
        <Drawer.Screen name={"MergeBudgets"} component={MergeBudgets} />
        <Drawer.Screen name={"BankReconciliations"} component={BankReconciliations} />
        <Drawer.Screen name={"Analytics"} component={Analytics} />
        <Drawer.Screen name={"DidYouKnow"} component={DidYouKnow} />
        <Drawer.Screen name={"Help"} component={Help} />
        <Drawer.Screen name={"logIn"} component={logIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
