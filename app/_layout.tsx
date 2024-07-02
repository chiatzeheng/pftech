import "../tamagui-web.css";
import "@/utils/globals";
import { useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import "react-native-url-polyfill/auto";
export { ErrorBoundary } from "expo-router";
import { CurrentToast } from "@/components/toast";
import { TamaguiProvider, type TamaguiProviderProps } from "tamagui";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { config } from "../tamagui.config";
import { WagmiProvider } from "wagmi";
import { wagmiConfig, queryClient } from "@/utils/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { useWalletInfo } from '@web3modal/wagmi-react-native'


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <RootLayoutNav />
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { walletInfo } = useWalletInfo()

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>

        <TamaguiProvider
          config={config}
          defaultTheme={colorScheme === "dark" ? "dark" : "light"}
        >
          <ToastProvider
            swipeDirection="horizontal"
            duration={6000}
            native={[] /* Uncomment if needed */}
          >
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                {walletInfo ? (
                  <Stack.Screen name="(tabs)" />
                ) : (
                  <Stack.Screen name="index" />
                )}
              </Stack>
              <CurrentToast />
              <ToastViewport top="$8" left={0} right={0} />
            </ThemeProvider>
          </ToastProvider>
        </TamaguiProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
