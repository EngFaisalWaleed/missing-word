import { StyleSheet } from "react-native";
import constants from "../../constants";

export const styles = StyleSheet.create({
  sentenceContainer: {
    flexDirection: "row",
  },
  sentence: {
    fontSize: 32,
    color: constants.colors.white,
    marginHorizontal: 6,
  },
});
