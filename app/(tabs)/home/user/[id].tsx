import { YStack, XStack, Button, Text, Avatar } from "tamagui";
import { user } from "@/lib/data";
import { Link } from "expo-router";

const User = () => {
  return (
    <YStack f={1} mt={"$10"} jc={"center"}>
      <XStack ai={"center"}>
        <Link href={`/user/${user?.cuid}`}>
          <Avatar circular size="$4">
            <Avatar.Image src={"http://picsum.photos/200/300"} />
            <Avatar.Fallback bc="red" />
          </Avatar>
        </Link>
        <Text>User</Text>
      </XStack>
      <Button>Send</Button>
    </YStack>
  );
};
