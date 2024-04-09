import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { View } from "react-native";
import { CtaButton } from "../../components/buttons/cta-button";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../theme/color-palette";
import { CustomInput } from "../../components/inputs/custom-input";

type Props = {};

export const NewOrder = (props: Props) => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.container}>
      <CustomInput
        inputValue={inputValue}
        onChangeText={(input) => setInputValue(input)}
      />
      <View style={styles.button}>
        <CtaButton text="Zurück" onPress={() => navigation.navigate("home")} />
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
  input: {},
  button: {
    width: "100%",
    maxWidth: 600,
    marginVertical: 24,
    paddingHorizontal: 16,
  },
});
