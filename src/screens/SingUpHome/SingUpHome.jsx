import { Image, Text, View, Pressable } from "react-native";
import React from "react";
import styles from "./SingUpHome.styles";
//ilustrations
import ilustration from "../../assets/images/image.png";

const SingUpHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={ilustration} style={styles.image} />
        <View style={styles.texts}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.info}>
            Manage your finances smartly and simply. You can keep track of your
            expenses efficiently and take full control of your personal
            finances.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.singUpButton}
          onPress={() => navigation.navigate("singup")}
        >
          <Text>SingUp</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SingUpHome;
