import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputField from "../components/InputField";
import Btn from "../components/Btn";
import { MaterialIcons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SosanPower</Text>
      <Text style={styles.subtitle}>
        Most convenient way to buy electricity
      </Text>
      <View style={styles.form}>
        <InputField
          type={"email"}
          placeholder={"Email"}
          rightIcon={<MaterialIcons name="email" />}
        />
        <InputField
          type={show ? "text" : "password"}
          placeholder={"Password"}
          rightIcon={
            show ? (
              <MaterialIcons name="visibility" />
            ) : (
              <MaterialIcons name="visibility-off" />
            )
          }
          onPress={() => setShow(!show)}
        />
        <Btn text={"Log In"} onPress={() => navigation.navigate("Home")} />
        <View style={styles.form_actions}>
          <Text
            style={{ color: "#0891b2" }}
            onPress={() => navigation.navigate("Forgot-password")}
          >
            Forgot your password?
          </Text>
          <Text
            style={{ color: "#0891b2" }}
            onPress={() => navigation.navigate("Sign-up")}
          >
            Sign up
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
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Login;
