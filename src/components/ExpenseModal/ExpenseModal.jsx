import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import {
  View,
  Modal,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import styles from "./ExpenseModel.styles";

const ExpenseModal = ({
  visible,
  onSave,
  onClose,
  totalAmount,
  setTotalAmount,
}) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const saveExpense = () => {
    if (amount && category) {
      onSave({ amount, category });
      setAmount("");
      setCategory("");
      onClose();

      const newTotalAmount = totalAmount - parseFloat(amount);
      setTotalAmount(newTotalAmount);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Feather size={24} name="x" />
        </Pressable>

        <View style={styles.inputContainer}>
          <Feather name="credit-card" size={16} style={styles.icon} />
          <TextInput
            value={category}
            onChangeText={(text) => setCategory(text)}
            placeholder="What did you spend?"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="dollar-sign" size={16} style={styles.icon} />
          <TextInput
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="Set your new expense"
            style={styles.input}
          />
        </View>

        <Pressable onPress={saveExpense} style={styles.button}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ExpenseModal;
