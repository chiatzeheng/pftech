import {
  YStack,
  XStack,
  Paragraph,
  Button,
  useTheme,
  H1,
  Card,
  ScrollView,
  H2,
  H4,
  Separator,
} from "tamagui";
import { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Play } from "@tamagui/lucide-icons";
import { graph } from "@/lib/data";

const Investments = () => {
  const theme = useTheme();
  const intervalIdRef = useRef(null);
  const [animatedData, setAnimatedData] = useState({
    labels: graph.labels,
    datasets: [{ data: Array(graph.datasets[0].data.length).fill(0) }],
  });

  const animateGraph = () => {
    let index = 0;

    const updateData = () => {
      setAnimatedData((prevData) => {
        const newData = [...prevData.datasets[0].data];
        newData[index] = graph.datasets[0].data[index];
        index++;
        return { ...prevData, datasets: [{ data: newData }] };
      });

      if (index >= graph.datasets[0].data.length) {
        clearInterval(intervalIdRef.current);
      }
    };

    intervalIdRef.current = setInterval(updateData, 40);

    return () => clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    animateGraph();
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalIdRef.current);
  }, []);

  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false} mx={"$4"}>
        <H2 mt={"$12"}>Total returns</H2>
        <XStack gap={"$4"}>
          <YStack>
            <H4>Interest</H4>
            <Paragraph>40 ETH</Paragraph>
          </YStack>
          <Separator alignSelf="stretch" vertical borderColor={"white"} />
          <YStack>
            <H4>Crypto</H4>
            <Paragraph>40 ETH</Paragraph>
          </YStack>
        </XStack>
        <YStack f={1} ai="center" pt="$4" alignItems="center">
          <LineChart
            data={animatedData}
            width={Dimensions.get("window").width}
            height={220}
            yAxisSuffix=" ETH"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: theme.red10.val,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: { borderRadius: 16 },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: theme.red10.val,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </YStack>

        <YStack space={8}>
          <Card elevate backgroundColor={"transparent"}>
            <XStack
              justifyContent="space-between"
              alignItems="center"
              padding="$4"
            >
              <H4>Stocks</H4>
              <Button>
                <Paragraph fontSize={10}>Learn more</Paragraph>
              </Button>
            </XStack>
          </Card>
          <Card elevate backgroundColor={"transparent"}>
            <XStack
              justifyContent="space-between"
              alignItems="center"
              padding="$4"
            >
              <H4>Interest</H4>
              <Button>
                <Paragraph fontSize={10}>Learn more</Paragraph>
              </Button>
            </XStack>
          </Card>
        </YStack>
      </ScrollView>
    </>
  );
};

export default Investments;
