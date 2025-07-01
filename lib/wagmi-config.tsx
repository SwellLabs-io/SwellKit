'use client';

import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { optimism } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ReactNode } from 'react';

const { publicClient, chains } = configureChains(
  [optimism],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
});

export function WagmiProviderConfig({ children }: { children: ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
