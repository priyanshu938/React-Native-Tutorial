import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const FlatListDemo = () => {
  const names = [
    { index: "1", name: "PRIYANSHU" },
    { index: "2", name: "TIWARI" },
    { index: "3", name: "ROHIT" },
    { index: "4", name: "SHARMA" },
    { index: "5", name: "VIRAT" },
    { index: "6", name: "KOHLI" },
    { index: "7", name: "SHIKHAR" },
    { index: "8", name: "DHAWAN" },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => key.index}
      data={names}
      horizontal
      // numColumns={2}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});
export default FlatListDemo;
