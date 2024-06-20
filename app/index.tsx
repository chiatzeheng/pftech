// src/components/App.js
import React from "react";
import { Button, YStack, Input } from "tamagui";
import { useContextProvider } from "@/utils/context";
import { useToastController } from "@tamagui/toast";
import { router } from "expo-router";

export default function App() {
  const [email, setEmail] = React.useState("");
  const { login } = useContextProvider();
  const toast = useToastController();

  const handleLogin = async () => {
    try {
      await login(email, toast);
      router.replace("(tabs)/home");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <YStack f={1} ai={"center"} jc={"center"} gap={"$2"} px="$4">
      <Input w={"$20"} placeholder="Enter email ..." onChangeText={setEmail} />
      <Button w={"$20"} onPress={handleLogin}>
        Login
      </Button>
    </YStack>
  );
}
