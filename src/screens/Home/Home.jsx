import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTotalAmount } from "../../features/totalAmountSlice/totalAmountSlice";
import { addTransaction } from "../../features/transactionsSlice/transactionsSlice";
import { ExpenseModal, ExpenseCard, AddTotalModal } from "../../components";
import styles from "./Home.styles.js";
import Feather from "@expo/vector-icons/Feather";
import ilustration from "../../assets/images/ilustration3.png";

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAddAmountModalVisible, setAddAmountModalVisible] = useState(false);

  //redux
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.totalAmount);
  const expenseData = useSelector((state) => state.transactions);

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
    dispatch(addTransaction(expense));
  };

  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", dateOptions);

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
        onAddTotal={(newTotal) => dispatch(setTotalAmount(newTotal))}
        onClose={toggleAddTotalModal}
      />

      <ExpenseModal
        visible={isModalVisible}
        onSave={saveExpense}
        onClose={toggleModal}
        totalAmount={totalAmount}
        setTotalAmount={(newTotal) => dispatch(setTotalAmount(newTotal))}
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
            <ExpenseCard
              amount={item.amount}
              category={item.category}
              formattedDate={formattedDate}
            />
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
