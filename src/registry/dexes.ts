import {z} from 'zod'
import {Dex} from '../schemas'

const Dexes = z.array(Dex)

export const dexes: z.infer<typeof Dexes> = [
  {
    name: 'UniswapV2',
    action: 'ethereum_uniswapv2',
    chainName: 'Ethereum',
    pairs: [
      {
        asset0: 'Ethereum/WETH',
        asset1: 'Ethereum/PHA',
      },
      {
        asset0: 'Ethereum/WETH',
        asset1: 'Ethereum/USDT',
      },
      {
        asset0: 'Ethereum/WETH',
        asset1: 'Ethereum/USDC',
      },
    ],
  },
  {
    name: 'UniswapV3',
    action: 'ethereum_uniswapv3',
    chainName: 'Ethereum',
    pairs: [],
  },
  {
    name: 'StellaSwap',
    action: 'moonbeam_stellaswap',
    chainName: 'Moonbeam',
    pairs: [
      {
        asset0: 'Moonbeam/WGLMR',
        asset1: 'Moonbeam/xcDOT',
      },
      {
        asset0: 'Moonbeam/xcPHA',
        asset1: 'Moonbeam/xcDOT',
      },
      {
        asset0: 'Moonbeam/xcASTR',
        asset1: 'Moonbeam/xcDOT',
      },
    ],
  },
  {
    name: 'ArthSwap',
    action: 'astar_evm_arthswap',
    chainName: 'AstarEvm',
    pairs: [
      {
        asset0: 'AstarEvm/WASTR',
        asset1: 'AstarEvm/DOT',
      },
      {
        asset0: 'AstarEvm/WASTR',
        asset1: 'AstarEvm/GLMR',
      },
      {
        asset0: 'AstarEvm/WASTR',
        asset1: 'AstarEvm/PHA',
      },
    ],
  },
  {
    name: 'EthereumWETH9',
    action: 'ethereum_nativewrapper',
    chainName: 'Ethereum',
    pairs: [
      {
        asset0: 'Ethereum/ETH',
        asset1: 'Ethereum/WETH',
      },
    ],
  },
  {
    name: 'MoonbeamWETH9',
    action: 'moonbeam_nativewrapper',
    chainName: 'Moonbeam',
    pairs: [
      {
        asset0: 'Moonbeam/GLMR',
        asset1: 'Moonbeam/WGLMR',
      },
    ],
  },
  {
    name: 'AstarEvmWETH9',
    action: 'astar_evm_nativewrapper',
    chainName: 'AstarEvm',
    pairs: [
      {
        asset0: 'AstarEvm/ASTR',
        asset1: 'AstarEvm/WASTR',
      },
    ],
  },
]

Dexes.parse(dexes)
