import { StyleSheet } from "react-native";
import constants from "../../constants";
export const styles = StyleSheet.create({
  continue: {
    backgroundColor: constants.colors.bgSecondary,
    paddingHorizontal: 44,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: "auto",
    marginBottom: 30,
    width: "90%",
  },
  continueText: {
    color: constants.colors.white,
    textAlign: "center",
  },
  bottomBox: {
    alignItems: "center",
    paddingTop: 20,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    width: "100%",
    marginTop: "auto",
  },
  resultText: {
    marginBottom: 20,
    color: constants.colors.white,
    alignSelf: "flex-start",
    paddingStart: 30,
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
