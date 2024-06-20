import { Tabs } from "expo-router";
import { useTheme } from "tamagui";
import {
  Home,
  AlignHorizontalDistributeCenter,
  WalletCards,
  Command,
} from "@tamagui/lucide-icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => <Home size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: "Invest",
          tabBarIcon: ({ color }) => (
            <AlignHorizontalDistributeCenter size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="card"
        options={{
          title: "Cards",
          tabBarIcon: ({ color }) => <WalletCards size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Commands",
          tabBarIcon: ({ color }) => <Command size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}
