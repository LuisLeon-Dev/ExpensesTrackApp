import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Details")}>
      <View>
        <Text>Home Welcome</Text>
      </View>
    </Pressable>
  );
};

export default Home;

const styles = StyleSheet.create({});
