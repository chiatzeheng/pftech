// App.tsx
import React from "react";
import { View, Text, Input, Button } from "tamagui";
import { useToastController } from "@tamagui/toast";
// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values";

// Import the the ethers shims (**BEFORE** ethers)
import "@ethersproject/shims";

// Import the ethers library
import { ethers } from "ethers";

// Example function for sending crypto (replace with actual implementation)
const SendCryptoScreen = ({ navigation }) => {
  const toast = useToastController();
  const [crypto, setCrypto] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [recipientPhone, setRecipientPhone] = React.useState("");

  const handleSend = () => {
    try {
      // const ethersProvider = ethers.getDefaultProvider(recipientPhone);
      // const wallet = new ethers.Wallet(key, ethersProvider);

      // const destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56";

      // // Convert 1 ether to wei
      // const amount = ethers.utils.parseEther("0.001");

      // // Submit transaction to the blockchain
      // const tx = await wallet.sendTransaction({
      //   to: destination,
      //   value: amount,
      //   maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
      //   maxFeePerGas: "6000000000000", // Max fee per gas
      // });

      toast.show("Crypto Sent", {
        message: " Sent 100 ETH to 8812351",
        type: "success",
      });
    } catch (error) {
      toast.show("Failed Transaction", {
        message: " Try again",
        type: "error",
      });
    }

    setCrypto("");
    setAmount("");
    setRecipientPhone("");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Send Crypto</Text>
      <Input
        style={{
          height: 40,
          width: "80%",
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Crypto (e.g., Bitcoin)"
        value={crypto}
        onChangeText={setCrypto}
      />
      <Input
        style={{
          height: 40,
          width: "80%",
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Input
        style={{
          height: 40,
          width: "80%",
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Recipient's Phone Number"
        value={recipientPhone}
        onChangeText={setRecipientPhone}
        keyboardType="phone-pad"
      />
      <Button w={"$20"} onPress={handleSend}>
        Send
      </Button>
    </View>
  );
};

export default SendCryptoScreen;
