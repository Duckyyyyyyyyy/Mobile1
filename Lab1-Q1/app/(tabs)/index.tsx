import { StyleSheet, View, Text, Button } from "react-native";

import { useState } from "react";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text>
          you have pressed the button {count} {count > 1 ? "times" : "time"}
        </Text>
        <Button title="Press me" onPress={() => setCount(count + 1)} />
        <Button title="Reset the count" onPress={() => setCount(0)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
