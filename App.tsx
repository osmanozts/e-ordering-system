import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { CheckOut } from "./app/screens/check-out";
import { Home } from "./app/screens/home";
import { Kitchen } from "./app/screens/kitchen";
import { NewOrder } from "./app/screens/new-order";
import { SignIn } from "./app/screens/sign-in";
import { supabase } from "./lib/supabase";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      {!session ? (
        <Stack.Navigator initialRouteName="sign-in">
          <Stack.Screen
            name="sign-in"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
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
