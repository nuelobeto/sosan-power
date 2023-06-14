import { View, Text, StyleSheet } from "react-native";
import InputField from "../components/InputField";
import Btn from "../components/Btn";
import { MaterialIcons } from "@expo/vector-icons";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SosanPower</Text>
      <Text style={styles.subtitle}>
        Enter your email to reset your password.
      </Text>
      <View style={styles.form}>
        <InputField
          type={"email"}
          placeholder={"Email"}
          rightIcon={<MaterialIcons name="email" />}
        />
        <Btn text={"Send reset Link"} />
        <View style={styles.form_actions}>
          <Text
            style={{ color: "#0891b2" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 48,
    paddingLeft: 24,
    paddingRight: 24,
  },
  logo: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
  },
  form: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    marginTop: 64,
  },
  form_actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default ForgotPassword;
