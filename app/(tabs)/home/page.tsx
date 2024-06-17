import {
  Button,
  ScrollView,
  H1,
  H2,
  Paragraph,
  XStack,
  YStack,
  Card,
  H4,
  useTheme,
  View,
  Dialog,
  Adapt,
  Sheet,
} from "tamagui";
import {
  BarChart,
  Blocks,
  Send,
  Wallet,
  Scan,
  MoveDiagonal,
} from "@tamagui/lucide-icons";
import Avatar from "@/components/avatar";
import { currency, transactions, user } from "@/lib/data";
import { Suspense, useState } from "react";
import TransactionDialog from "@/components/transactiondialog";
// import Camera from "@/components/camera";

type Currency = {
  amount: number;
  symbol: string;
};

const Home = () => {
  const theme = useTheme();
  const [value, setValue] = useState<Currency>();
  const [camera, setCamera] = useState<boolean>(false);
  const [showCurrency, setCurrency] = useState<boolean>(false);

  return (
    <ScrollView bouncesZoom>
      <YStack f={1} px="$3" pt="$10" columnGap="1">
        <XStack f={1} my={"$3"} ai={"center"}>
          <Avatar {...user} />
          <Button
            jc={"flex-end"}
            ml={"auto"}
            bg="$colorTransparent"
            onPress={() => setCamera(true)}
          >
            {/* <Camera /> */}
          </Button>
        </XStack>
        <Paragraph fontWeight="bold">Total Balance</Paragraph>
        <Suspense fallback={<H1>Loading...</H1>}>
          <H1>
            {value?.amount}
            {value?.symbol}
            300 ETH
          </H1>
        </Suspense>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          maxHeight={50}
        >
          <XStack gap={"$2"} br={15}>
            <Button backgroundColor={theme.red10.val}>
              <Send /> Send
            </Button>
            <Button>
              <Wallet />
              Wallet
            </Button>
            <Button>
              <MoveDiagonal />
              Request
            </Button>
          </XStack>
        </ScrollView>

        <ScrollView
          mt={10}
          showsHorizontalScrollIndicator={false}
          horizontal
          maxHeight={250}
        >
          {currency.map((item) => (
            <XStack key={item.id}>
              <Card
                elevate
                fw="wrap"
                gap="$1.5"
                size="$4"
                mr="$2"
                bordered
                borderRadius={15}
                animation="bouncy"
                width={250}
                height={200}
                scale={0.9}
                hoverStyle={{ scale: 0.925 }}
                pressStyle={{ scale: 0.875 }}
              >
                <Card.Header padded>
                  <H2>
                    {item.icon} {item.name}
                  </H2>
                </Card.Header>
                <Paragraph
                  fontSize={24}
                  ml={"$5"}
                  fontWeight="bold"
                  color={theme.red10.val}
                >
                  {item.amount + " " + item.symbol}
                </Paragraph>
                <Card.Footer padded>
                  <XStack flex={1}>
                    <View>
                      <Paragraph theme="alt2" fontSize={16}>
                        <Blocks />
                        {item.address.slice(0, 10)}...
                      </Paragraph>
                    </View>
                  </XStack>
                </Card.Footer>
              </Card>
            </XStack>
          ))}
          <Card
            elevate
            gap="$1.5"
            size="$4"
            bordered
            borderRadius={15}
            animation="bouncy"
            ai={"center"}
            justifyContent="center"
            width={250}
            height={200}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          >
            <Paragraph theme="alt2" fontSize={16}>
              Add New Crypto +
            </Paragraph>
          </Card>
        </ScrollView>

        <XStack f={1} flexDirection="row" alignItems="flex-end">
          <H2 mt={10}>Transaction</H2>
          <Paragraph
            jc={"flex-end"}
            ml={"auto"}
            fontWeight="bold"
            textDecorationLine="underline"
          >
            View All
          </Paragraph>
        </XStack>

        <YStack mt={10}>
          {transactions.map((transaction, index) => (
            <Dialog key={index} modal>
              <Dialog.Trigger asChild>
                <YStack key={index} mb="$4" px="$3">
                  <H4>{transaction.company}</H4>
                  <Paragraph theme="alt2">{transaction.date}</Paragraph>
                  <XStack justifyContent="space-between">
                    <Paragraph>
                      {transaction.amount.icon} {transaction.amount.value}{" "}
                      {transaction.amount.currency}
                    </Paragraph>
                    <Paragraph>{transaction.card}</Paragraph>
                  </XStack>
                </YStack>
              </Dialog.Trigger>
              <Adapt when="sm" platform="touch">
                <Sheet
                  animation="medium"
                  zIndex={200000}
                  modal
                  dismissOnSnapToBottom
                >
                  <Sheet.Frame padding="$4" gap="$4">
                    <Adapt.Contents />
                  </Sheet.Frame>
                  <Sheet.Overlay
                    animation="lazy"
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                  />
                </Sheet>
              </Adapt>
              <TransactionDialog />
            </Dialog>
          ))}
        </YStack>
        <H2 mt={10}>Recents</H2>
      </YStack>
    </ScrollView>
  );
}

export default Home;