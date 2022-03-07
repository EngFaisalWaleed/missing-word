import React, { FC, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { firebase } from "../../api";
import Phrase from "../../components/Phrase";
import Question from "../../components/Question";
import Option from "../../components/Option";
import BottomBox from "../../components/BottomBox";
import { Exercise } from "../../types";
import { styles } from "./HomeScreenStyles";
import constants from "../../constants";
export default function HomeScreen() {
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  const [execiseNumber, setExeciseNumber] = useState<number>(0);
  const [resultText, setResultText] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    firebase.getExercises(setExercises);
  }, []);

  const handleAction = () => {
    if (selectedOption) checkResult();
    else {
      if (exercises.length - 1 == execiseNumber) {
        setResultText("All Exercises completed");
        return;
      }
      setExeciseNumber((prevVal) => prevVal + 1);
      setResultText("");
    }
  };

  const checkResult = () => {
    if (selectedOption === exercises[execiseNumber].correctOption) {
      setResultText(constants.resultText.success);
      setSelectedOption("");
    } else {
      setResultText("Answer :" + exercises[execiseNumber].correctOption);
      setSelectedOption("");
    }
  };

  const renderOptions: FC = () => {
    return (
      <View style={styles.optionContainer}>
        {exercises[execiseNumber]?.options.map((op: string, index: number) => (
          <Option
            key={index}
            text={op}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedOption("");
        setResultText("");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Fill in the missing word</Text>
        <Phrase phrase={exercises[execiseNumber]?.en} />
        <Question
          question={exercises[execiseNumber]?.question}
          selectedOption={selectedOption}
          resultText={resultText}
        />
        {renderOptions()}
        <BottomBox
          resultText={resultText}
          handleAction={handleAction}
          selectedOption={selectedOption}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
