//import libraries to create components
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Buttons from "./src/screens/Buttons";
import CustomComponent from "./src/screens/CustomComponent";
import FlatListDemo from "./src/screens/FlatListDemo";
import Images from "./src/screens/Images";
import NetflixCard from "./src/components/NetflixCard";
import MultipleStylesInOneSingleComponent from "./src/components/MultipleStylesInOneSingleComponent"
//create a component that returns some jsx
export default function App() {
  return (
    <View style={styles.container}>
      {/* <CustomComponent />
      <FlatListDemo /> */}
      {/* <Images /> */}
      {/* <Buttons />*/}
      {/* <Text style={styles.headerStyle}>Netflix Card</Text>
      <NetflixCard
        imageSource={require("./assets/1.jpg")}
        text="All of Us Dead"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
      /> */}
      <MultipleStylesInOneSingleComponent />
    </View>
  );
}

//Create a StyleSheet to style the component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop:100
  },
  textStyle: {
    color: "red",
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
