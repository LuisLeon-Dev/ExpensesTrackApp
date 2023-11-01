import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.LightGreen,
  },
  image: {
    marginLeft: 50,
  },
  texts: {
    marginLeft: 46,
    marginTop: 50,
    marginRight: 50,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter_bold",
    color: colors.color_titles,
    marginBottom: 20,
  },
  info: {
    color: colors.dark,
    fontFamily: "Inter",
    fontSize: 14,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  loginButton: {
    width: 147,
    height: 48,
    marginRight: 10,
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  singUpButton: {
    width: 147,
    height: 48,
    borderWidth: 1,
    borderColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
