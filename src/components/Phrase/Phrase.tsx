import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./PhraseStyles";
const Phrase: FC<{ phrase: string }> = ({ phrase }) => {
  return (
    <View style={styles.sentenceContainer}>
      {phrase?.split(" ").map((word: String, index: Number) => (
        <Text style={styles.sentence}>{word}</Text>
      ))}
    </View>
  );
};

export default Phrase;
