import { Button, Image, StyleSheet, View } from "react-native";
import Input from "@/shared/Input";
import { Colors, Gaps } from "@/shared/tokens";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} resizeMode="contain" source={require("../assets/logo.png")} />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Password" />
          <Button title="Войти" />
        </View>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 55,
    backgroundColor: Colors.black,
  },
  content: {
    alignItems: "center",
    gap: Gaps.g50,
  },
  logo: {
    width: 220,
  },
  form: {
    alignSelf: "stretch",
    gap: Gaps.g16,
  },
});
