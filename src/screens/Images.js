import React from "react";
import { View } from "react-native";
import CardDetail from "../components/CardDetail";

const Images = () => {
  return (
    <View>
      <CardDetail text="Image1" imageSource={require("../../assets/1.jpg")} />
      <CardDetail text="Image2" imageSource={require("../../assets/1.jpg")} />
      <CardDetail text="Image3" imageSource={require("../../assets/1.jpg")} />
    </View>
  );
};

export default Images;
