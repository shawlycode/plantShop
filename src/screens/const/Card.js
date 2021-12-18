import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "./Colors";
import plants from "./Plants";

const width = Dimensions.get("screen").width / 2 - 30;

const Item = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.favoriteBtn}>
      <View style={styles.favicon}>
        <MaterialIcons name="favorite" size={24} color={COLORS.red} />
      </View>
    </View>
    <Image source={plants.img} style={{ flex: 1, resizeMode: "contain" }} />
  </View>
);

const Card = () => {
  const renderItem = ({ item, plants, img, price }) => (
    <Item
      style={{ justifyContent: "center" }}
      title={item.plants}
      price={item.price}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={plants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: COLORS.grey,
    height: 225,
    width,
    marginHorizontal: 4,
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  favoriteBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(245,42,42,0.2)",
  },
  favicon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Card;
