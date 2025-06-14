import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} resizeMode="contain" source={require("../assets/logo.png")} />
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
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
    backgroundColor: "#16171D",
  },
  content: {
    alignItems: "center",
    gap: 50,
  },
  logo: {
    width: 220,
  },
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
  input: {
    backgroundColor: "#2e2d3d",
  },
});
