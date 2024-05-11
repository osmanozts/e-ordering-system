import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
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
        <CtaButton text="Küche" onPress={() => console.log("Küche pressed")} />
      </View>
      <View style={styles.button}>
        <CtaButton text="Kasse" onPress={() => console.log("Kasse pressed")} />
      </View>
      <View style={styles.button}>
        <CtaButton
          text="Ausloggen"
          onPress={() => console.log("Ausloggen pressed")}
        />
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
