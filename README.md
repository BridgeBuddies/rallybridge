# Rally to Rally-Solana Bridge
There are two steps for converting a Rally (Ethereum) token to a Rally-Solana token
1. Convert Rally -> Rally-Wormhole
2. Convert Rally-Wormhole -> Rally-Solana

For step 1, we are using the Wormhole UI https://github.com/certusone/wormhole/tree/dev.v2/bridge_ui
For step 2, we are using the Wormhole->Rally CLI https://github.com/rally-dfs/dfs-ts/tree/main/cli

This project will integrate both steps into an integrated UI experience

## Running the Rally->Wormhole UI
Follow the README doc in the `bridge_ui` directory for more information.

Run the following from the root of this repo only once:
```
DOCKER_BUILDKIT=1 docker build --target node-export -f Dockerfile.proto -o type=local,dest=. .
DOCKER_BUILDKIT=1 docker build -f solana/Dockerfile.wasm -o type=local,dest=. solana
npm ci --prefix ethereum
npm ci --prefix sdk/js
npm run build --prefix sdk/js
```

To run the UI, cd into the `bridge_ui` directory and run these commands:

Install (run only if package.json is updated):
`npm ci`

Build using local testnet (will not hook up into the wallet):
`npm run build`

Build using mainnet (will hook up to actual wallet):
`REACT_APP_CLUSTER=mainnet REACT_APP_COVALENT_API_KEY=ckey_0608d4eeb16046b59392b8d788b REACT_APP_SOLANA_API_URL=https://api.mainnet-beta.solana.com/ npm run build`

Run the server:
`npx serve -s build`

## Running the Wormhole->Rally CLI manually
cd into the `wormholetorally/cli` directory

Follow the README doc in the `wormholetorally/cli` directory for more information.

Installation:
First cd into the `wormholetorally/cli` and run:
`npm i`
`npm run build`

Next cd into the `wormholetorally/cli` and run:
`npm i`
`npm run build`

Run commands:
`node ./build/cli/src/dfs-cli.js [command]`

Example:
`dfs-cli get-balance-wormhole -k /Users/brianzhu/.config/solana/whateveryouwant.json `


Create the wallet key file (you need to input your wallet recovery phase):npm i -g dfs-cli
`solana-keygen recover 'prompt:?key=0/0' --outfile ~/.config/solana/solanaKeyPair.json`


Command list:

Get Canonical $RLY Token Balance:
`node ./build/cli/src/dfs-cli.js get-balance-canonical -k [path to wallet key]`

Get wormhole $RLY Token Balance:
`node ./build/cli/src/dfs-cli.js get-balance-wormhole -k [path to wallet key]`

Swap wormhole $RLY for canonical $RLY:
`node ./build/cli/src/dfs-cli.js swap-wormhole-canonical -a 1 -k [path to wallet key] -w [wormhole-rally wallet account number] -c [rally-solana wallet account number]`

Swap canonical $RLY for wormhole $RLY (do the opposite swap):
`node ./build/cli/src/dfs-cli.js swap-canonical-wormhole -a 1 -k [path to wallet key] -w [wormhole-rally wallet account number] -c [rally-solana wallet account number]`
