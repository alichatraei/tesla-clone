import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
const Header = () => {
  return (
    <View style={styles.logoContainerStyles}>
      <Image
        style={styles.logoStyles}
        source={require("../../../assets/images/model1.jpg")}
      />
    </View>
  );
};

export default Header;
