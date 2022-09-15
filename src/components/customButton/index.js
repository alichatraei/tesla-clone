import React from "react";
import { Linking, Pressable, Text, View } from "react-native";
import styles from "./styles";

const CustomButton = ({
  buttonTitle,
  backgroundColor,
  buttonTitleColor,
  websiteLike = "www.tesla.com",
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.customButtonStyles,
          { backgroundColor: backgroundColor },
        ]}
        onPress={() =>
          Linking.canOpenURL(websiteLike).then((supported) =>
            supported
              ? Linking.openURL(websiteLike)
              : console.warn(
                  `Oops we don't know how open this URL: ${websiteLike}`
                )
          )
        }
      >
        <Text style={{ color: buttonTitleColor }}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
