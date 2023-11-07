import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.Blue,
  },
  cameraButton: {
    backgroundColor: colors.DarkGreen,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 295,
    height: 48,
    marginTop: 15,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  ButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  logoutButton: {
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
    borderRadius: 5,
    width: 295,
    height: 48,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
