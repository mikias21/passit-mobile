import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  safe_area: {
    padding: 30,
  },

  navbar: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  form_container: {
    marginTop: 80,
  },

  header_one: {
    fontSize: 30,
    fontFamily: "Poppins-Black",
  },

  header_two: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },

  activate_form: {
    marginTop: 25,
  },

  pin_label: {
    fontSize: 17,
    fontFamily: "Poppins-Regular",
  },

  pin_input: {
    padding: 10,
    color: "#111",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 2,
  },

  button_container: {
    marginTop: 30,
    width: "100%",
  },

  button_pressable: {
    backgroundColor: "#3742fa",
    borderRadius: 2,
    padding: 10,
  },

  button_text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },

  footer_links: {
    marginTop: 40,
  },

  footer_link_one: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },

  footer_link_two: {
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  footer_link_p: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },

  footer_link: {
    color: "#3742fa",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});
