import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { CheckOut } from "./app/screens/check-out";
import { Home } from "./app/screens/home";
import { Kitchen } from "./app/screens/kitchen";
import { NewOrder } from "./app/screens/new-order";
import { SignIn } from "./app/screens/sign-in";
import { TamaguiProvider } from "tamagui";
import config from "./lib/tamagui.config";
import { getStorageItem } from "./app/services/storage/storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const accessToken = await getStorageItem("accessToken");

      if (accessToken) setSession(accessToken);
    };

    checkSession();
  }, []);

  const handleLogout = () => {
    setSession(null);
  };

  const handleLogIn = (newSession: string) => {
    setSession(newSession);
  };

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        {!session ? (
          <Stack.Navigator initialRouteName="sign-in">
            <Stack.Screen name="sign-in" options={{ headerShown: false }}>
              {(props) => (
                <SignIn
                  {...props}
                  onLogIn={(newSession: string) => handleLogIn(newSession)}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" options={{ headerShown: false }}>
              {(props) => <Home {...props} onLogout={handleLogout} />}
            </Stack.Screen>
            <Stack.Screen
              name="new-order"
              component={NewOrder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="kitchen"
              component={Kitchen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="check-out"
              component={CheckOut}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
