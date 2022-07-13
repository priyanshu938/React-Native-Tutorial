//import libraries to create components
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import FlatListDemo from "./src/screens/FlatListDemo";
import Images from "./src/screens/Images";

//create a component that returns some jsx
export default function App() {
  return (
    <View style={styles.container}>
      {/* <CustomComponent />
      <FlatListDemo /> */}
      <Images />
    </View>
  );
}

//Create a StyleSheet to style the component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "red",
  },
});
