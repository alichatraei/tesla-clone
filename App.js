import React from "react";
import { StyleSheet, View } from "react-native";
import CarItem from "./src/components/carItem";
const slides = {
  car1: require("./assets/images/model1.jpg"),
  car2: require("./assets/images/model2.jpg"),
  car3: require("./assets/images/model3.jpg"),
  car4: require("./assets/images/model4.jpg"),
};
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        bgImage={slides.car1}
        title="ModelS"
        subtitle="Starting at $84,125"
        titleColor="#fafafa"
        subtitleColor="#818181"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
