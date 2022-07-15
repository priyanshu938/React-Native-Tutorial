//import libraries to create components
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Buttons from "./src/screens/Buttons";
import CustomComponent from "./src/screens/CustomComponent";
import FlatListDemo from "./src/screens/FlatListDemo";
import Images from "./src/screens/Images";
import NetflixCard from "./src/components/NetflixCard";
import NetflixScrollingCards from "./src/components/NetflixScrollingCards";
import MultipleStylesInOneSingleComponent from "./src/components/MultipleStylesInOneSingleComponent";
//create a component that returns some jsx
export default function App() {
  const netflix = [
    {
      index: 1,
      img: require("./assets/netflix.png"),
      text: "Netflix",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      link: "https://www.netflix.com",
    },
    {
      index: 2,
      img: require("./assets/google.png"),
      text: "Google",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      link: "https://www.google.com",
    },
    {
      index: 3,
      img: require("./assets/facebook.png"),
      text: "Facebook",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      link: "https://www.facebook.com",
    },
    {
      index: 4,
      img: require("./assets/amazon.png"),
      text: "Amazon",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      link: "https://www.amazon.com",
    },
  ];
  return (
    <View style={styles.container}>
      {/* <CustomComponent />
      <FlatListDemo /> */}
      {/* <Images /> */}
      {/* <Buttons />*/}
      {/* <MultipleStylesInOneSingleComponent /> */}
      <NetflixScrollingCards netflix={netflix} />
    </View>
  );
}

//Create a StyleSheet to style the component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  textStyle: {
    color: "red",
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
