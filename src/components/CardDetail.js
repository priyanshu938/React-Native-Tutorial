import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const CardDetail = ({ text, imageSource }) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>{text}</Text>
      <Image style={styles.imageStyle} source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
  imageStyle: {
    width: 150,
    margin: 5,
    height: 150,
  },
});
export default CardDetail;
