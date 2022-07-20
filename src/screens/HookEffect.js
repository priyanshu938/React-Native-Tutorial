import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import StudentsCard from "./StudentsCard";

const HookEffect = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await response.json();
      setData(myData);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return isLoaded ? (
    <View style={styles.loader}>
      {/* loader */}
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>List Of Students</Text>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => key.id}
        data={data}
        renderItem={({ item }) => {
          return <StudentsCard item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "pink",
    width: "100%",
    height: "100%",
    paddingVertical: 100,
  },
  header: {
    fontSize: 40,
    textAlign: "center",
  },
});
export default HookEffect;
