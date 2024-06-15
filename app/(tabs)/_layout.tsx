import { Tabs } from "expo-router";
import { useTheme } from "tamagui";
import {
  Home,
  AlignHorizontalDistributeCenter,
  Users,
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
        name="home/page"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => <Home size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="invest/page"
        options={{
          title: "Invest",
          tabBarIcon: ({ color }) => (
            <AlignHorizontalDistributeCenter size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="recipients/page"
        options={{
          title: "Recipients",
          tabBarIcon: ({ color }) => <Users size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="commands/page"
        options={{
          title: "Commands",
          tabBarIcon: ({ color }) => <Command size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}
