import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

export default function App() {
  const [groceries, setGroceries] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, { key: groceries }]);
    setGroceries("");
  };

  const clear = () => {
    setList([]);
  };

  return (
    <View style={styles.container}>
     
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setGroceries(text)}
        value={groceries}
      />
      <View style={{ flexDirection: "row" }}>
        <Button onPress={add} title="Add" />
        <Button onPress={clear} title="Clear" />
      </View>
      <Text>Shoppinglist</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
