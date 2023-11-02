// ExpenseDetailScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ExpenseCard } from "../../components";

const DetailScreen = ({ route }) => {
  const { amount, category, date } = route.params; // Recupera los detalles del gasto

  return (
    <View style={styles.container}>
      <ExpenseCard amount={amount} category={category} />
      <Text style={styles.dateText}>Fecha y Hora: {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dateText: {
    fontSize: 16,
    color: "gray",
  },
});

export default DetailScreen;
