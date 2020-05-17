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
  },
  assets: {
    value: 1.5,
  },
  liabilities: {
    value: 132.3,
  },
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

{/* <button id="upload_widget" class="cloudinary-button">Upload files</button>

<script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>  

<script type="text/javascript">  
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'my_cloud_name', 
  uploadPreset: 'my_preset'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
</script> */}

const styles = StyleSheet.create({
  items: {
    alignItems: "center",
  },
});
