import "../styles/index.css";
import Layout from "../components/Layout";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";


const { provider, chains } = configureChains([chain.polygonMumbai], [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]);

const { connectors } = getDefaultWallets({
  appName: 'savingHistory',
  chains
});

const wagmiClient = createClient({
  autoConnect:true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
