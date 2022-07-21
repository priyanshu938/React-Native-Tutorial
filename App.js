//import libraries to create components
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Buttons from "./src/screens/Buttons";
import CustomComponent from "./src/screens/CustomComponent";
import FlatListDemo from "./src/screens/FlatListDemo";
import HookEffect from "./src/screens/HookEffect";
import Images from "./src/screens/Images";
import NetflixCard from "./src/components/NetflixCard";
import NetflixScrollingCards from "./src/components/NetflixScrollingCards";
import MultipleStylesInOneSingleComponent from "./src/components/MultipleStylesInOneSingleComponent";
import Flexbox from "./src/components/Flexbox";
import Positions from "./src/components/Positions";
import CounterNumber from "./src/components/CounterNumber";
import ContactUs from "./src/components/ReactNavigation/ContactUs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/ReactNavigation/Home";

//create a component that returns some jsx
export default function App() {
  const Stack = createNativeStackNavigator();
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ContactUs} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      {/* <View style={styles.container}> */}
      {/* <CustomComponent />
      <FlatListDemo /> */}
      {/* <Images /> */}
      {/* <Buttons />*/}
      {/* <MultipleStylesInOneSingleComponent /> */}
      {/* <NetflixScrollingCards netflix={netflix} /> */}
      {/* <Flexbox /> */}
      {/* <Positions /> */}
      {/* <CounterNumber /> */}
      {/* <HookEffect /> */}
      {/* <ContactUs/> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

//Create a StyleSheet to style the component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 4,
    // alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "red",
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
