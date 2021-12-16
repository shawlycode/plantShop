import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
import COLORS from "./Colors";
import plants from "./Plants";

const width = Dimensions.get("screen").width / 2 - 30;

const Item = ({ plants }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{plants}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.plants} style={{ justifyContent: "center" }} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
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
  item: {
    backgroundColor: COLORS.grey,
    height: 225,
    width,
    marginHorizontal: 4,
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
});

export default App;
