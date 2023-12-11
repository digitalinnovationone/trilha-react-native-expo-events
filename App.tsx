import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { helloDarthVader } from "./src/actions";

export default function App() {
  async function handlerHelloWorld() {
    console.log("hello handler function");
  }

  async function handlerPress(id: number) {
    console.log("pressionado", id);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ fontSize: 32 }}
        placeholder="olá"
        onChangeText={() => console.log("onChange Text acionado")}
        onChange={() => console.log("onChange Executado")}
        onFocus={() => console.log("Usuario focou nesse componente")}
      />
      <Text
        style={{ fontSize: 32 }}
        onPressOut={() => console.log("3. press out acionado")}
        onPressIn={() => console.log("1. press in acionado")}
        onPress={() => console.log("2. press acionado")}
        onLongPress={() => console.log("longPress Acionado")}
        onTextLayout={() => console.log("Texto no Layout")}
      >
        componente principal
      </Text>
      {/* <Text onPress={() => console.log("inline")}>Inline</Text>

      <Text onPress={handlerHelloWorld}>Handler Function</Text>

      <Text onPress={() => handlerPress(1)}>
        Handler Function With Parameters
      </Text>

      <Text onPress={helloDarthVader}>Another File</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
