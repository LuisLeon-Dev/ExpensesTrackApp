import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { ExpenseModal, ExpenseCard, AddTotalModal } from "../../components";

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [isAddTotalModalVisible, setAddTotalModalVisible] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0.0);

  const navigateToDetail = (amount, category, date) => {
    navigation.navigate("Details", { amount, category, date });
  };

  const openAddTotalModal = () => {
    setAddTotalModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const saveExpense = (expense) => {
    setExpenseData([...expenseData, expense]);
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar Gasto" onPress={toggleModal} />
      <Button title="Agregar Monto Total" onPress={openAddTotalModal} />

      <Text style={styles.totalText}>
        Monto Total: {totalAmount.toFixed(2)}
      </Text>
      <AddTotalModal
        visible={isAddTotalModalVisible}
        onAddTotal={setTotalAmount}
        onClose={() => setAddTotalModalVisible(false)}
      />
      <ExpenseModal
        visible={isModalVisible}
        onSave={saveExpense}
        onClose={toggleModal}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
      />

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    padding: 8,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 4,
  },
});

export default HomeScreen;
