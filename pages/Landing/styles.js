import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },

  dark_mode_container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 30,
  },

  container: {
    marginTop: 130,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding: 30,
  },

  header_one_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  header_one: {
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  header_one_sub_one: {
    color: "#3742fa",
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  header_one_sub_dot: {
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  header_one_sub_two: {
    color: "#3742fa",
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  paragraph_one: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: "Poppins-Regular",
  },

  button_container: {
    marginTop: 20,
  },

  button_one: {
    backgroundColor: "#3742fa",
    padding: 10,
    width: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  button_one_text: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },

  button_two_link: {
    marginTop: 60,
    fontSize: 14,
    textDecorationLine: "underline",
    fontFamily: "Poppins-Regular",
  },
});
