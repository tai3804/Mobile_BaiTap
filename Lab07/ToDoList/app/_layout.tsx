import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { useEffect } from "react";
import { initDB } from "../database/database";

export default function RootLayout() {
  useEffect(() => {
    (async () => {
      await initDB();
      console.log("✅ Database ready");
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="add" />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
