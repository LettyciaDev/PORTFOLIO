import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { Colors } from "@/constants/theme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
