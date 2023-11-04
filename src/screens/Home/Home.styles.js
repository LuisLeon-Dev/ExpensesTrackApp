import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.Grey,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.DarkGreen,
    width: 327,
    height: 165,
    borderRadius: 24,
    marginTop: 20,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  image: {
    position: "absolute",
    right: 0,
    zIndex: -1,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 15,
  },
  text: {
    color: colors.WhiteDarker,
    fontSize: 15,
  },
  subtitleContainer: {
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: 40,
  },

  subtitle: {
    fontFamily: "Inter_bold",
    fontSize: 16,
  },
  totalAmount: {
    color: "#fff",
    fontSize: 35,
    fontFamily: "Inter_bold",
    marginTop: 10,
  },
  addBudgetButton: {
    backgroundColor: colors.Yellow,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: colors.WhiteDarker,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    right: 15,
  },
  addSpendButton: {
    backgroundColor: colors.Yellow,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderWidth: 4,
    borderColor: colors.Blue,
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 30,
  },
});
