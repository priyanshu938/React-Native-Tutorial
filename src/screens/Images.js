import React from "react";
import { Text, View, StyleSheet,Image } from "react-native";

const Images = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>Images</Text>
      <Image style={styles.imageStyle} source={require("../../assets/1.jpg")} />
      <Image style={styles.imageStyle} source={require("../../assets/1.jpg")} />
      <Image style={styles.imageStyle} source={require("../../assets/1.jpg")} />
      <Image style={styles.imageStyle} source={require("../../assets/1.jpg")} />
      <Image style={styles.imageStyle} source={require("../../assets/1.jpg")} />

    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginTop:50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
  imageStyle:{
    width:150,
    margin:5,
    height:150
  }
});
export default Images;
