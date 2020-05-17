import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  TextInput
} from 'react-native';
import React, { useState, useEffect } from "react";

import BasicItem from "../components/BasicItem";
import HeaderBar from "../components/HeaderBar";
import HomeHeading from "../components/HomeHeading";


export default class didYouKnow extends React.Component {
  state = {  
    placeName: "",  
    places: []  
};  

placeNameChangedHandler = val => {  
    this.setState({  
        placeName: val  
    });  
};  

placeSubmitHandler = () => {  
    alert("button clicked")  
};  
render() {  

  return (
    <View>
      <HeaderBar pageName={"Home"} />
      <HomeHeading />
      <View style={styles.innerContainer}>  
      
      <Button  
                            title="Make a Memory"  
                            onPress={this.placeSubmitHandler}  
                    />
                    <Button  
                            title="Test a Memory"  
                            onPress={this.placeSubmitHandler}  
                    />  
                </View>  
    </View>
  );
}}


const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      padding: 26,  
      backgroundColor: "#fff",  
      justifyContent: "flex-start"  
  },  
  innerContainer:{  
     // flex: 1,  
      width: "82%",  
      flexDirection: "row",  
      justifyContent: "space-between",  
      alignItems: "center",
      margin:35
  },  
  textStyle:{  
      width: "70%",  
      backgroundColor: "gray",  
  },  
  buttonStyle:{  
      width: "50%",

  }  
});  
