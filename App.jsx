import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, View, Text } from "react-native";
import Signup from "./screens/Signup";
import ForgotPassword from "./screens/ForgotPassword";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Sign-up"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Forgot-password"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Drawer.Screen name="Profile" component={Profile} />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: 400,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
