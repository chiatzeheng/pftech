import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { View, Text, Card, Button, useTheme, Theme } from "tamagui";

export default function NotFoundScreen() {
  const theme = useTheme();
  return (
    <Theme>
      <Stack.Screen options={{ title: "Oops!", headerShown: false }} />
      <View backgroundColor="black" style={styles.container}>
        <Card margin={10} padding={20} borderRadius={10} shadowOpacity={0.2}>
          <Card.Header>
            <Text style={styles.title}>This screen doesn't exist.</Text>
          </Card.Header>
          <Card.Footer jc="center">
            <Link href="(tabs)/home/page" style={styles.link}>
              <Button backgroundColor={theme.red10.val} borderRadius={5}>
                <Text style={styles.linkText}>Go to home screen!</Text>
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </View>
    </Theme>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#fff",
  },
});
