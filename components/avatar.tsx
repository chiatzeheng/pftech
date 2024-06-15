import { router } from "expo-router";
import { Avatar } from "tamagui";

type AvatarProps = {
  name: string;
  image: string;
  cuid: string;
};

export default ({ props }: AvatarProps) => (
  <Avatar circular size="$4">
    <Avatar.Image src={props?.image || "http://picsum.photos/200/300"} />
    <Avatar.Fallback bc="red" />
  </Avatar>
);