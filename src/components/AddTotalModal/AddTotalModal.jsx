// AddTotalModal.js
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import {
  SafeAreaView,
  Modal,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import styles from "./addTotalModel.style";

const AddTotalModal = ({ visible, onAddTotal, onClose }) => {
  const [totalAmount, setTotalAmount] = useState("");

  const addTotal = () => {
    if (totalAmount) {
      onAddTotal(parseInt(totalAmount));
      setTotalAmount("");
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Feather size={24} name="x" />
        </Pressable>
        <View style={styles.inputContainer}>
          <Feather name="dollar-sign" size={16} style={styles.icon} />
          <TextInput
            value={totalAmount.toString()}
            onChangeText={(text) => setTotalAmount(text)}
            placeholder="Set your new budget"
            style={styles.input}
          />
        </View>

        <Pressable onPress={addTotal} style={styles.button}>
          <Text style={styles.buttonText}>Add Budget</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export default AddTotalModal;
