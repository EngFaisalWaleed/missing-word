import { StyleSheet } from "react-native";
import constants from "../../constants";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: constants.colors.bgPrimary,
    alignItems: "center",
    paddingTop: 130,
    color: constants.colors.white,
  },

  title: {
    color: constants.colors.white,
  },

  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
  },
});
