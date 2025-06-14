import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Colors, Fonts, Radius } from "./tokens";
import EyeClosedIcon from "@/assets/icons/eye-closed";
import EyeOpenedIcon from "@/assets/icons/eye-opened";
import { useState } from "react";

export default function Input(
  props: TextInputProps & { isPassword?: boolean }
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        style={styles.input}
        secureTextEntry={props.isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.gray}
        {...props}
      />
      {props.isPassword && (
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible((state) => !state)}
        >
          {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    borderRadius: Radius.r10,
    fontSize: Fonts.f16,
    color: Colors.gray,
  },
  eyeIcon: {
    position: "absolute",
    right: 24,
    top: 16,
  },
});
