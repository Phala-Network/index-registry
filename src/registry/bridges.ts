import {z} from 'zod'
import {Bridge} from '../schemas'

const Bridges = z.array(Bridge)

export const bridges: z.infer<typeof Bridges> = [
  {
    name: 'Ethereum2Phala',
    action: 'ethereum_sygmabridge_to_phala',
    sourceChain: 'Ethereum',
    destChain: 'Phala',
    pairs: [
      {
        asset0: 'Ethereum/PHA',
        asset1: 'Phala/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Phala2Ethereum',
    action: 'phala_bridge_to_ethereum',
    sourceChain: 'Phala',
    destChain: 'Ethereum',
    pairs: [
      {
        asset0: 'Phala/PHA',
        asset1: 'Ethereum/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Phala2Moonbeam',
    action: 'phala_bridge_to_moonbeam',
    sourceChain: 'Phala',
    destChain: 'Moonbeam',
    pairs: [
      {
        asset0: 'Phala/PHA',
        asset1: 'Moonbeam/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Phala2Astar',
    action: 'phala_bridge_to_astar',
    sourceChain: 'Phala',
    destChain: 'Astar',
    pairs: [
      {
        asset0: 'Phala/PHA',
        asset1: 'Astar/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Moonbeam2Phala',
    action: 'moonbeam_bridge_to_phala',
    sourceChain: 'Moonbeam',
    destChain: 'Phala',
    pairs: [
      {
        asset0: 'Moonbeam/PHA',
        asset1: 'Phala/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Moonbeam2Astar',
    action: 'moonbeam_bridge_to_astar',
    sourceChain: 'Moonbeam',
    destChain: 'Astar',
    pairs: [
      {
        asset0: 'Moonbeam/GLMR',
        asset1: 'Astar/GLMR',
        reserve0: '',
        reserve1: '',
      },
      {
        asset0: 'Moonbeam/ASTR',
        asset1: 'Astar/ASTR',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Astar2AstarEvm',
    action: 'astar_bridge_to_astarevm',
    sourceChain: 'Astar',
    destChain: 'AstarEvm',
    pairs: [
      {
        asset0: 'Astar/ASTR',
        asset1: 'AstarEvm/ASTR',
        reserve0: '',
        reserve1: '',
      },
      {
        asset0: 'Astar/GLMR',
        asset1: 'AstarEvm/GLMR',
        reserve0: '',
        reserve1: '',
      },
      {
        asset0: 'Astar/PHA',
        asset1: 'AstarEvm/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Ethereum2Khala',
    action: 'ethereum_sygmabridge_to_khala',
    sourceChain: 'Ethereum',
    destChain: 'Khala',
    pairs: [
      {
        asset0: 'Ethereum/PHA',
        asset1: 'Khala/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
  {
    name: 'Astar2Phala',
    action: 'astar_bridge_to_phala',
    sourceChain: 'Astar',
    destChain: 'Phala',
    pairs: [
      {
        asset0: 'Astar/PHA',
        asset1: 'Phala/PHA',
        reserve0: '',
        reserve1: '',
      },
    ],
  },
]

Bridges.parse(bridges)
