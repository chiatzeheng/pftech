export const currency = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: "₿",
    address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    blockchain: "Bitcoin Blockchain",
    decimals: 8,
    amount: 2.5,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: "Ξ",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    blockchain: "Ethereum Blockchain",
    decimals: 18,
    amount: 10,
  },
  {
    id: 3,
    name: "Klaytn",
    symbol: "KLAY",
    icon: "Ł",
    address: "rN7n7otQDd6FczFgLdSQT7iDbYPAwxDJp3",
    blockchain: "Klaytn Blockchain",
    decimals: 6,
    amount: 1500,
  },
  // {
  //   id: 4,
  //   name: "Litecoin",
  //   symbol: "LTC",
  //   icon: "Ł",
  //   address: "M9nUS5mhL5QSkbJhAABNjtQucP5pA2vjqX",
  //   blockchain: "Litecoin",
  //   decimals: 8,
  //   amount: 30,
  // },
  // {
  //   id: 5,
  //   name: "Cardano",
  //   symbol: "ADA",
  //   icon: "₳",
  //   address: "addr1q9v0h4",
  //   blockchain: "Cardano",
  //   decimals: 6,
  //   amount: 5000,
  // },
];

export const transactions = [
  {
    date: "2024-06-01",
    amount: {
      value: 0.5,
      currency: "BTC",
      icon: "🪙",
    },
    card: "Crypto Wallet",
    company: "Coinbase",
  },
  {
    date: "2024-06-02",
    amount: {
      value: 1.2,
      currency: "ETH",
      icon: "🪙",
    },
    card: "Crypto Wallet",
    company: "Binance",
  },
  {
    date: "2024-06-03",
    amount: {
      value: 250,
      currency: "KLAY",
      icon: "🪙",
    },
    card: "Crypto Wallet",
    company: "Kraken",
  },
  {
    date: "2024-06-04",
    amount: {
      value: 0.05,
      currency: "BTC",
      icon: "🪙",
    },
    card: "Crypto Wallet",
    company: "Gemini",
  },
  {
    date: "2024-06-05",
    amount: {
      value: 5,
      currency: "ETH",
      icon: "🪙",
    },
    card: "Crypto Wallet",
    company: "Bitfinex",
  },
];

export const user = {
  cuid: "iodph*O&GD3oQNDGQ",
  name: "John Doe",
  image: "http://picsum.photos/200/300",
};

export const graph = {
  labels: ["01-24", "02-24", "03-24", "04-24", "05-25", "06-24"],
  datasets: [
    {
      data: [8, 10, 11, 12, 13, 14],
    },
  ],
};
