import { StyleSheet } from "react-native";
import constants from "../../constants";
export const styles = StyleSheet.create({
  optionBox: {
    width: "38%",
  },
  option: {
    backgroundColor: constants.colors.white,
    color: constants.colors.bgPrimary,
    padding: 16,
    borderRadius: 22,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 32,
    textAlign: "center",
  },
  emptyOption: {
    backgroundColor: constants.colors.bgSecondary,
    color: constants.colors.bgSecondary,
    padding: 16,
    borderRadius: 22,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
});
