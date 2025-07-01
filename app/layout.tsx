import './globals.css';
import { WagmiProviderConfig } from '../lib/wagmi-config';

export const metadata = {
  title: 'SwellKit',
  description: 'Swap, Bridge & Pool UI Template for Optimism',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiProviderConfig>{children}</WagmiProviderConfig>
      </body>
    </html>
  );
}
