import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titlesStyles: {
    alignItems: "center",
    marginTop: 50,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#212121",
  },
  subtitleStyle: {
    fontSize: 16,
    color: "#818181",
  },
  bgImage: {
    resizeMode: "contain",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
});
export default styles;
