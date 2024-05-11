import { View } from "react-native";
import { EmailForm } from "../../components/auth/email-form";

type SignInProps = {
  onLogIn: (newSession: string) => void;
};

export const SignIn = ({ onLogIn }: SignInProps) => {
  return (
    <View>
      <EmailForm onLogIn={onLogIn} />
    </View>
  );
};
