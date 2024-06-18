// src/components/App.js
import React from "react";
import { Button, YStack, Input } from "tamagui";
import { useToastController } from "@tamagui/toast";
import { useAuth } from "@/utils/context";

export default function App() {
  const toast = useToastController();
  const { email, setEmail, login } = useAuth();

  const handleLogin = () => {
    login(email, toast);
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
