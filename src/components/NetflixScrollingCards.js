import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import NetflixCard from "../components/NetflixCard";

const NetflixScrollingCards = ({ netflix }) => {
  return (
    <View>
      <Text style={styles.headerStyle}>Netflix Cards</Text>
      <FlatList
        keyExtractor={(key) => key.index}
        data={netflix}
        horizontal
        // numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <NetflixCard
              imageSource={item.img}
              text={item.text}
              description={item.description}
              link={item.link}
            />
          );
        }}
      />
    </View>
  );
};
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
    textAlign: "center",
  },
});
export default NetflixScrollingCards;
