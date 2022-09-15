import React from "react";
import { ImageBackground, Text, View } from "react-native";
import CustomButton from "../customButton";
import styles from "./styles";

const CarItem = ({
  bgImage,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  existingLink,
  orderLinks,
}) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.bgImage} source={bgImage} />
      <View style={styles.titlesStyles}>
        <Text style={[styles.titleStyle, { color: titleColor }]}>{title}</Text>
        <Text style={[styles.subtitleStyle, { color: subtitleColor }]}>
          {subtitle}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonTitle="Custom Order"
          backgroundColor="#f2f2f2"
          websiteLike={orderLinks}
        />
        <CustomButton
          buttonTitle="Existing Inventory"
          backgroundColor="#212121"
          buttonTitleColor="#f2f2f2"
          websiteLike={existingLink}
        />
      </View>
    </View>
  );
};

export default CarItem;
