import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";

export default function Analytics() {
  const [data, setData] = useState(null);
  async function getData() {
    const data = await fetch("https://tohack.herokuapp.com/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify("amountSpentDaily"),
    });
    const obj = await data.json();
    return (obj);
  }
  function loadImage(blob) {
    const reader = new FileReader();
    let dataURL;
    reader.addEventListener("load", function () {
      dataURL = reader.result;
    }, false);
    if (blob) {
      reader.readAsDataURL(blob);
    }
    return dataURL;
  }
  useEffect(() => {
    getData().then((fetched) => setData(fetched.results.results));
  }, []);
  return (
    <View>
      {data ? (
        <Image style={{ width: 50, height: 50 }} source={{ uri: loadImage(data) }} />
      ) : null}
    </View>
  );
}
