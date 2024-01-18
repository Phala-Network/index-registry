import {z} from 'zod'

export const ChainName = z.enum([
  'Ethereum',
  'Moonbeam',
  'AstarEvm',
  'Astar',
  'Phala',
  'Khala',
  'Acala',
  'Polkadot',
])

export const Hex = z.string().regex(/^0x[a-fA-F0-9]*$/)
export const Decimal = z.string().regex(/^\d*\.?\d*$/)

export const Asset = z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number().int().positive(),
  location: Hex,
  existentialDeposit: z.record(ChainName, Decimal),
  icon: z.string(),
})

export const Chain = z.object({
  name: ChainName,
  chainId: z.number().int().positive(),
  chainType: z.enum(['evm', 'sub']),
  foreignAsset: z.enum(['PalletAsset', 'OrmlToken']).nullable(),
  isTest: z.boolean(),
  nativeAsset: Hex,
  handlerContract: Hex,
  endpoint: z.string().url(),
  txIndexerURL: z.string().url(),
  explorerURL: z.string().url(),
  icon: z.string(),
  assets: z.array(Asset),
})

export const Bridge = z.object({
  name: z.string(),
  action: z.string(),
  sourceChain: ChainName,
  destChain: ChainName,
  pairs: z.array(
    z.object({
      asset0: z.string(),
      asset1: z.string(),
      reserve0: z.string(),
      reserve1: z.string(),
    })
  ),
})

export const Dex = z.object({
  name: z.string(),
  action: z.string(),
  chainName: ChainName,
  pairs: z.array(
    z.object({
      asset0: z.string(),
      asset1: z.string(),
    })
  ),
})
