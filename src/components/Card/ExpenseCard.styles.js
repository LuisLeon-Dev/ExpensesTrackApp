import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export default styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    width: 327,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginTop: 20,
  },
  amount: {
    fontSize: 16,
    fontFamily: "Inter_bold",
  },
  category: {
    fontSize: 16,
    fontFamily: "Inter_bold",
    marginBottom: 5,
  },
  date: {
    color: colors.DarkGrey,
  },
});
