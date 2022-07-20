import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const StudentsCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: `${item.image}`,
        }}
      />
      <View style={styles.details}>
        <View style={styles.nameAndId}>
          <Text style={[styles.name, styles.common]}>Name : {item.name}</Text>
          <Text style={styles.id}>
            {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
          </Text>
        </View>
        <Text style={[styles.email, styles.common]}>Email : {item.email}</Text>
        <Text style={[styles.mobile, styles.common]}>Mobile : {item.mobile}</Text>
      </View>
    </View>
  );
};

export default StudentsCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 5,
    margin: 50,
    borderColor: "#F5F5F5",
  },
  imageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  nameAndId: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  details: {
    paddingVertical: 20,
    paddingLeft: 10,
    backgroundColor: "black",
  },
  common: {
    color: "#F5FEFD",
    paddingTop:10
  },
  name: {
    fontSize: 20,
    flex: 1,
  },
  id: {
    fontSize: 30,
    alignSelf: "flex-end",
    color: "grey",
    paddingHorizontal: 3,
  },
  email: {
    fontSize: 20,
    
  },
  mobile: {
    fontSize: 20,
  },
});
