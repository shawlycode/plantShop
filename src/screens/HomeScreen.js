import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

import COLORS from "./const/Colors";
import { TextInput } from "react-native-gesture-handler";
import CategoryList from "./const/CategoryList";
import Plants from "../screens/const/Plants";
import Card from "./const/Card";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 43, fontWeight: "bold", color: COLORS.green }}
          >
            Plant Shop
          </Text>
        </View>
        <View>
          <FontAwesome5 name="shopping-cart" size={30} color="black" />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <Ionicons name="search" size={30} color={COLORS.light} />
          <TextInput
            placeholder="Search"
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginLeft: 30,
              color: COLORS.light,
            }}
          />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="sort" size={30} color={COLORS.light} />
        </View>
      </View>

      <CategoryList />
      <Card />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 30,
  },
  search: {
    flex: 1,
    backgroundColor: COLORS.grey,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 30,
  },
  sortBtn: {
    backgroundColor: COLORS.green,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {},
});
