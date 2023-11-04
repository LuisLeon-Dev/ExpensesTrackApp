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
        <Pressable onPress={onClose}>
          <Feather size={24} name="x" />
        </Pressable>
        <Text>Ingresa la cantidad gastada:</Text>
        <TextInput
          value={amount}
          onChangeText={(text) => setAmount(text)}
          placeholder="Cantidad"
        />
        <Text>Ingresa la categoría:</Text>
        <TextInput
          value={category}
          onChangeText={(text) => setCategory(text)}
          placeholder="Categoría"
        />

        <Button title="Guardar" onPress={saveExpense} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default ExpenseModal;
