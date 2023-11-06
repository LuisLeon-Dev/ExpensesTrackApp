import React, { useState } from "react";
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
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/Auth/AuthSlice";

const Singup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignUp, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPassword);
    triggerSignUp({
      email,
      password,
    });
    if (result.isSuccess) {
      dispatch(setUser(result));
    }
  };

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
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          placeholderTextColor="#353A48"
        />
        <Feather name="mail" size={24} style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#353A48"
          secureTextEntry={true}
        />
        <Feather name="lock" size={24} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="#353A48"
          secureTextEntry={true}
        />
        <Feather name="lock" size={24} style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>SignUp</Text>
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
