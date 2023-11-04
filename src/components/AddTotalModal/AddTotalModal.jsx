// AddTotalModal.js
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

const AddTotalModal = ({ visible, onAddTotal, onClose }) => {
  const [totalAmount, setTotalAmount] = useState(0.0);

  const addTotal = () => {
    if (totalAmount) {
      onAddTotal(parseInt(totalAmount));
      setTotalAmount("");
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Pressable onPress={onClose}>
          <Feather size={24} name="x" />
        </Pressable>
        <Text>Ingresa el monto total:</Text>
        <TextInput
          value={totalAmount.toString()}
          onChangeText={(text) => setTotalAmount(text)}
          placeholder="Monto total"
        />
        <Button title="Agregar" onPress={addTotal} />
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

export default AddTotalModal;
