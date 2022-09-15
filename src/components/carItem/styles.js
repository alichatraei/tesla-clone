import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  titlesStyles: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
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
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    marginBottom: 50,
  },
});
export default styles;
