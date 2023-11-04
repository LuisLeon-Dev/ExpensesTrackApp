import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import styles from "./SingUp.styles";

import ilustration from "../../assets/images/ilustration2.png";

const Singup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Feather size={24} name="arrow-left" style={styles.closeButton} />
      </Pressable>
      <Image source={ilustration} style={styles.image} />
      <Text style={styles.text}>Let's Start!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#353A48"
        />
        <Feather name="mail" size={24} style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#353A48"
          secureTextEntry={true} // Para campos de contraseña
        />
        <Feather name="lock" size={24} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#353A48"
          secureTextEntry={true} // Para campos de contraseña
        />
        <Feather name="lock" size={24} style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>SingUp</Text>
        </Pressable>
      </View>
      <View style={styles.newAccount}>
        <Text> Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("login")}>
          <Text style={styles.createAccountButton}>Let's get started!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Singup;
