import { Asset } from 'apps/bridge/src/types/Asset';

// NOTE TO CONTRIBUTORS: Please do not add assets directly to this file.
// For new assets, submit to the Superchain Token List (STL) for review at:
// https://github.com/ethereum-optimism/ethereum-optimism.github.io
// The team reviews and pulls allowlisted assets from the STL into this file.

const assets: Asset[] = [
  {
    L1symbol: 'ETH',
    L2symbol: 'ETH',
    L1chainId: 1,
    L2chainId: 8453,
    apiId: 'ethereum',
    L1icon: '/icons/currency/eth.svg',
    L2icon: '/icons/currency/eth.svg',
    decimals: 18,
    protocol: 'OP',
  },
  {
    L1symbol: 'USDC',
    L2symbol: 'USDC',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    L2contract: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    apiId: 'usd-coin',
    L1icon: '/icons/currency/usdc.svg',
    L2icon: '/icons/currency/usdc.svg',
    decimals: 6,
    protocol: 'CCTP',
  },
  {
    L1symbol: 'KOMPETE',
    L2symbol: 'KOMPETE',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0x1E0b2992079B620AA13A7c2E7c88D2e1E18E46E9',
    L2contract: '0x8f019931375454Fe4EE353427eB94E2E0C9e0a8C',
    apiId: 'braintrust',
    L1icon: '/icons/currency/kompete.svg',
    L2icon: '/icons/currency/kompete.svg',
    decimals: 10,
    protocol: 'OP',
  }
];

export default assets;
