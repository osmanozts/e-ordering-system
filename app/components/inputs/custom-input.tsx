import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { sizes, spacing } from "../../../theme/size-tokens";

type CustomInputProps = {
  inputValue: string;
  onChangeText: (input: string) => void;
};

export const CustomInput = ({ inputValue, onChangeText }: CustomInputProps) => {
  return (
    <TextInput
      style={styles.input}
      value={inputValue}
      onChangeText={(input) => onChangeText(input)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    maxWidth: sizes.tiles.maxTileWidth,
    height: 24,
    borderWidth: 1,
    marginHorizontal: spacing.tiles.horizontolSpacingSmall,
    marginVertical: spacing.tiles.verticalSpacingLarge,
  },
});
