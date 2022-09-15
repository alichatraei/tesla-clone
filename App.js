import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import CarItem from "./src/components/carItem";
import carsList from "./src/constants/carsList";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={carsList}
          keyExtractor={(item) => item?.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CarItem
              bgImage={item?.image}
              title={item?.title}
              subtitle={item?.subTitle}
              titleColor="#fafafa"
              subtitleColor="#818181"
              orderLink={item?.orderLink}
              existingLink={item?.existingInventory}
            />
          )}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  flatListContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
});
