import {chains, bridges, dexes} from './registry'

const stringify = (obj: any) => JSON.stringify(obj, null, 2)

await Bun.write('./dist/chains.json', stringify(chains))
await Bun.write('./dist/bridges.json', stringify(bridges))
await Bun.write('./dist/dexes.json', stringify(dexes))
await Bun.write('./dist/registry.json', stringify({chains, bridges, dexes}))
