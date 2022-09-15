import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const CustomButton = ({ buttonTitle, backgroundColor, buttonTitleColor }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.customButtonStyles,
          { backgroundColor: backgroundColor },
        ]}
      >
        <Text style={{ color: buttonTitleColor }}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
