import {
  ExternalLink,
  CalendarClock,
  Repeat,
  CreditCard,
} from "@tamagui/lucide-icons";
import {
  Anchor,
  H2,
  H4,
  Paragraph,
  ScrollView,
  Separator,
  View,
  XStack,
  YStack,
} from "tamagui";
import { Image } from "expo-image";
import { blurhash } from "@/lib/constant";

export default function Commands() {
  return (
    <ScrollView>
      <YStack f={1} gap={"$2"} px="$4" pt="$5">
        <H2 mt={"$8"}>Commands</H2>

        <YStack f={1} ai="center" mt="$4" gap="$4">
          <XStack ai="center">
            <CalendarClock size={"1"} mr={"$4"} />
            <YStack f={1}>
              <H4>Scheduled Transfers</H4>
              <Paragraph theme="alt2">Manage Outgoing Transactions</Paragraph>
            </YStack>
            <ExternalLink size={"1"} />
          </XStack>

          <XStack ai="center">
            <Repeat size={"1"} mr={"$4"} />
            <YStack f={1}>
              <H4>Credit Fault Swaps</H4>
              <Paragraph theme="alt2">Manage Outgoing Transactions</Paragraph>
            </YStack>
            <ExternalLink size={"1"} />
          </XStack>

          <XStack ai="center">
            <CreditCard size={"1"} mr={"$4"} />
            <YStack f={1}>
              <H4>History </H4>
              <Paragraph theme="alt2">Manage Outgoing Transactions</Paragraph>
            </YStack>
            <ExternalLink size={"1"} />
          </XStack>
        </YStack>
        <Separator my={"$4"} alignSelf="stretch" borderColor={"white"} />

        <H2 pt="$2">Holdings</H2>

        <YStack f={1} ai="center" mt={"$4"} gap="$4">
          <XStack ai="center">
            {/* <Image
              style={{ flex: 1, width: "100%", backgroundColor: "#0553" }}
              source={require("@/assets/images/bitcoin.svg")}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            /> */}
            <YStack f={1}>
              <H4>Bitcoin</H4>
              <Paragraph theme="alt2">Metamask</Paragraph>
            </YStack>
            <ExternalLink size={"1"} />
          </XStack>

          <XStack ai="center">
            <YStack f={1}>
              <H4>Etherium</H4>
              <Paragraph theme="alt2">Manage Outgoing Transactions</Paragraph>
            </YStack>
            <ExternalLink size={"1"} />
          </XStack>

          <XStack ai="center">
            <YStack f={1}>
              <H4>Klaytn</H4>
              <Paragraph theme="alt2">Manage Outgoing Transactions</Paragraph>
            </YStack>
            <ExternalLink size={"1"} />
          </XStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
