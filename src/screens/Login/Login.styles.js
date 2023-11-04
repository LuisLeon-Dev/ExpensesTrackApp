import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LightPink,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  image: {
    marginTop: 60,
  },
  text: {
    fontSize: 50,
    color: colors.pink,
    margin: 40,
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },

  button: {
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 295,
    height: 48,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  newAccount: {
    alignItems: "center",
    marginTop: 15,
  },
  createAccountButton: {
    marginTop: 3,
    color: "#1A7FFF",
  },
});
