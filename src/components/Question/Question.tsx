import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./QuestionStyles";
import constants from "../../constants";
const Question: FC<{
  question: string;
  selectedOption: string;
  resultText: string;
}> = ({ question, selectedOption, resultText }) => (
  <View style={styles.questionContainer}>
    {question?.split(" ").map((q: String, index: number) => (
      <TouchableOpacity key={index}>
        {q.includes("__") && selectedOption ? (
          <Text
            style={[
              styles.selectedOption,
              resultText.length
                ? resultText === constants.resultText.success
                  ? styles.pass
                  : styles.fail
                : {},
            ]}
          >
            {selectedOption}
          </Text>
        ) : (
          <Text style={styles.question}>{q}</Text>
        )}
      </TouchableOpacity>
    ))}
  </View>
);

export default Question;
