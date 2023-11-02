import React, { useState } from "react";
import { View, Modal, Text, TextInput, Button, StyleSheet } from "react-native";

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
