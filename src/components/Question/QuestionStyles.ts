import { StyleSheet } from "react-native";
import constants from "../../constants";
export const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  question: {
    color: constants.colors.white,
    margin: 12,
    fontSize: 18,
    fontWeight: "600",
  },
  selectedOption: {
    backgroundColor: constants.colors.white,
    color: constants.colors.bgPrimary,
    borderRadius: 22,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingVertical: 16,
    paddingHorizontal: 28,
  },

  fail: {
    color: constants.colors.white,
    backgroundColor: constants.colors.danger,
  },
  pass: {
    color: constants.colors.white,
    backgroundColor: constants.colors.success,
  },
});
