import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "./Colors";

const category = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];

const CategoryList = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      {category.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => {
            setCategoryIndex(index);
          }}
        >
          <Text
            key={index}
            style={[
              styles.categoryText,
              categoryIndex == index && styles.categoryTextActive,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
    elevation: 1,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  categoryTextActive: {
    color: COLORS.green,
    paddingBottom: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
    borderBottomColor: COLORS.green,
  },
});
