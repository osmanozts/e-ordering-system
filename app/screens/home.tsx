import { StyleSheet, Text, View } from "react-native";
import { supabase } from "../../lib/supabase";
import { CtaButton } from "../components/buttons/cta-button";

type Props = {};

export const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <CtaButton text="ausloggen" onPress={() => supabase.auth.signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
