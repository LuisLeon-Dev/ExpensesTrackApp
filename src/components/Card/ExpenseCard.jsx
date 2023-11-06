import React from "react";
import { View, Text } from "react-native";
import styles from "./ExpenseCard.styles";

const ExpenseCard = ({ amount, category, formattedDate }) => {
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
