import '@walletconnect/react-native-compat'
import { WagmiProvider } from 'wagmi'
import { klaytn, klaytnBaobab } from '@wagmi/core/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'

// 0. Setup queryClient
export const queryClient = new QueryClient()

const projectId = process.env.EXPO_PUBLIC_WALLET_CONNECT!

const metadata = {
  name: 'KAIX',
  description: 'One Stop Solution for all your DeFi needs.',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'exp://192.168.1.19:8081',
  }
}

const chains = [ klaytnBaobab, klaytn] as const

export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({
  projectId,
  wagmiConfig,
  enableAnalytics: true
})
