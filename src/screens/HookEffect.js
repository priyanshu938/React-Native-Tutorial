import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

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

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => key.id}
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.mobile}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    fontSize: 100,
    margin: 100,
  },
});
export default HookEffect;
