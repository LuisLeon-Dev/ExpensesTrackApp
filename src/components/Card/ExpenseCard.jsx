// ExpenseCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExpenseCard = ({ amount, category }) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <View style={styles.card}>
      <Text>Cantidad: {amount}</Text>
      <Text>Categoría: {category}</Text>
      <Text>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 4,
  },
});

export default ExpenseCard;
