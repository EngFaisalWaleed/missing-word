import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import constants from "../../constants";
import { styles } from "./BottomBoxStyles";

const BottomBox: FC<{
  resultText: string;
  handleAction: () => void;
  selectedOption: string;
}> = ({ resultText, handleAction, selectedOption }) => (
  <View
    style={[
      styles.bottomBox,
      resultText.length
        ? resultText === constants.resultText.success
          ? styles.pass
          : styles.fail
        : {},
    ]}
  >
    <Text style={styles.resultText}>{resultText}</Text>
    <TouchableOpacity style={styles.continue} onPress={handleAction}>
      <Text style={styles.continueText}>
        {selectedOption ? "Check Answer" : "Continue"}
      </Text>
    </TouchableOpacity>
  </View>
);

export default BottomBox;
