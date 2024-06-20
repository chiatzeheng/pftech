import { Stack, Tabs } from "expo-router";
import { useTheme } from "tamagui";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ header: () => null }}>
      <Stack.Screen name="page" />
    </Stack>
  );
}
