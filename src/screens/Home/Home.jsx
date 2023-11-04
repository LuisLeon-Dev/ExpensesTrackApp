import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import { ExpenseModal, ExpenseCard, AddTotalModal } from "../../components";
import styles from "./Home.styles.js";
import Feather from "@expo/vector-icons/Feather";
import ilustration from "../../assets/images/ilustration3.png";

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAddAmountModalVisible, setAddAmountModalVisible] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const navigateToDetail = (amount, category, date) => {
    navigation.navigate("Details", { amount, category, date });
  };

  const toggleAddTotalModal = () => {
    setAddAmountModalVisible(!isAddAmountModalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const saveExpense = (expense) => {
    setExpenseData([...expenseData, expense]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.amountContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Available Balance</Text>
          <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
        </View>
        <Pressable onPress={toggleAddTotalModal} style={styles.addBudgetButton}>
          <Feather size={24} name="plus" />
        </Pressable>
        <Image source={ilustration} style={styles.image} />
      </View>

      <AddTotalModal
        visible={isAddAmountModalVisible}
        onAddTotal={setTotalAmount}
        onClose={toggleAddTotalModal}
      />

      <ExpenseModal
        visible={isModalVisible}
        onSave={saveExpense}
        onClose={toggleModal}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
      />

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>My Expenses</Text>
      </View>

      <FlatList
        data={expenseData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigateToDetail(item.amount, item.category, item.date)
            }
          >
            <ExpenseCard amount={item.amount} category={item.category} />
          </Pressable>
        )}
      />

      <Pressable onPress={toggleModal} style={styles.addSpendButton}>
        <Feather size={24} name="plus" />
        <View style={styles.circle} />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
