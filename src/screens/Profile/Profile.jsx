import { SafeAreaView, Text, View, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Feather from "@expo/vector-icons/Feather";
import styles from "./Profile.styles";
import ilustration from "../../assets/images/User.png";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/Auth/AuthSlice";
import { clearUser } from "../../features/Auth/AuthSlice";
import { usePostProfileImageMutation } from "../../services/api";

const Profile = () => {
  const image = useSelector((state) => state.auth.imageCamera);
  const { localId } = useSelector((state) => state.auth);
  const { triggerSaveProfileImage, result } = usePostProfileImageMutation();
  const dispatch = useDispatch;

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId });
    console.log(result);
  };

  const logOut = () => {
    dispatch(clearUser()); // Despacha la acción clearUser para cerrar la sesión
    // Aquí puedes agregar lógica adicional, como redireccionar a la pantalla de inicio de sesión, si es necesario.
  };

  return (
    <SafeAreaView style={styles.container}>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image source={ilustration} style={styles.image} resizeMode="cover" />
      )}

      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text style={styles.ButtonText}>
          Take a Photo <Feather name="camera" size={16} />
        </Text>
      </Pressable>
      <Pressable style={styles.cameraButton} onPress={confirmImage}>
        <Text style={styles.ButtonText}>
          Confirm <Feather name="arrow-up-circle" size={16} />
        </Text>
      </Pressable>

      <Pressable style={styles.logoutButton} onPress={logOut}>
        <Text style={styles.ButtonText}>
          LogOut <Feather size={16} name="log-out" />
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;
