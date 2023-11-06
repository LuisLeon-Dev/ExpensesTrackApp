import {
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/Auth/AuthSlice";
import styles from "./Login.styles";

import ilustration from "../../assets/images/ilustration2.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
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
      <Text style={styles.text}>Welcome Back!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#353A48"
        />
        <Feather name="mail" size={24} style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#353A48"
          secureTextEntry={true} // Para campos de contraseña
        />
        <Feather name="lock" size={24} style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.newAccount}>
        <Text> You don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("singup")}>
          <Text style={styles.createAccountButton}>Create one now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
