import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { supabase } from "../../../lib/supabase";
import { colors } from "../../../theme/color-palette";
import { CtaButton } from "../../components/buttons/cta-button";

type Props = {};

export const Home = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <CtaButton
          text="Neue Bestellung"
          onPress={() => navigation.navigate("new-order")}
        />
      </View>
      <View style={styles.button}>
        <CtaButton text="Küche" onPress={() => supabase.auth.signOut()} />
      </View>
      <View style={styles.button}>
        <CtaButton text="Kasse" onPress={() => supabase.auth.signOut()} />
      </View>
      <View style={styles.button}>
        <CtaButton text="ausloggen" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    alignItems: "center",
    marginVertical: 24,
    paddingHorizontal: 16,
  },
});
