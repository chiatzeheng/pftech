// // Dont touch this file unless you know what ur doing

import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import * as SecureStore from "expo-secure-store";
import Web3Auth, {
  ChainNamespace,
  OPENLOGIN_NETWORK,
} from "@web3auth/react-native-sdk";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

export const redirectUrl =
  Constants.appOwnership == AppOwnership.Expo
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: "myapp" });

const clientId = process.env.EXPO_PUBLIC_WEB3AUTH_CLIENT_ID || "";

export const chainConfig = {
  chainNamespace: ChainNamespace.EIP155,
  chainId: "0x3e9", // hex of 1001, Klaytn Boabab testnet
  rpcTarget: "https://api.baobab.klaytn.net:8651",
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: "Klaytn Testnet",
  blockExplorerUrl: "https://baobab.scope.klaytn.com/",
  ticker: "KLAY",
  tickerName: "KLAY",
  decimals: 18,
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

export const ethereumPrivateKeyProvider = new EthereumPrivateKeyProvider({
  config: {
    chainConfig,
  },
});

export const web3auth = new Web3Auth(WebBrowser, SecureStore, {
  clientId,
  redirectUrl,
  network: OPENLOGIN_NETWORK.TESTNET, // or other networks
});

web3auth.init();
