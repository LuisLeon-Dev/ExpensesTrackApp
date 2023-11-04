// ExpenseCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./ExpenseCard.styles";

const ExpenseCard = ({ amount, category }) => {
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", dateOptions);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.info}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.amount}>$ {amount}</Text>
    </View>
  );
};

export default ExpenseCard;
