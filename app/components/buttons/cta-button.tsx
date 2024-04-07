import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../../theme/color-palette";

type CtaButtonProps = {
  text: string;
  onPress: () => void;
};

export const CtaButton = (props: CtaButtonProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.layoutColor,
    padding: 12,
    borderRadius: 12,
    borderColor: colors.accentColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: colors.primaryColor,
    fontSize: 18,
  },
});
