import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export default styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 16,
  },

  closeButton: {
    position: "relative",
    left: 140,
  },

  button: {
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 295,
    height: 48,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    marginHorizontal: 40,
    flexDirection: "row",
    marginVertical: 20,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});
