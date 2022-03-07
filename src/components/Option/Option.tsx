import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./OptionStyles";
const Option: FC<{
  text: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}> = ({ text, selectedOption, setSelectedOption }) => (
  <TouchableOpacity
    style={styles.optionBox}
    onPress={() => setSelectedOption(text)}
  >
    {selectedOption === text ? (
      <Text style={styles.emptyOption}>{text}</Text>
    ) : (
      <Text style={styles.option}>{text}</Text>
    )}
  </TouchableOpacity>
);

export default Option;
