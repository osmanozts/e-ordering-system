import { View } from "react-native";
import { EmailForm } from "../components/auth/email-form";

type Props = {};

export const SignIn = (props: Props) => {
  return (
    <View>
      <EmailForm />
    </View>
  );
};
