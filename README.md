# Smart Contracts

### [Mint your own NFT](https://buildspace.so/p/mint-nft-collection)

Programmatically generate your own NFT collection, write + deploy a smart contract in Solidity, 
and build your own React dApp to let friends connect their wallets and interact w/ your NFTs.

### [Build Solidity DApp](https://buildspace.so/p/build-solidity-web3-app)

Weekend build where you'll learn some Solidity, write + deploy a smart contract to the blockchain, and build a Web3 client app to interact with your contract. Perfect for hackers curious about crypto.


## Getting Started

- 🔔 Rename the file `.env.example` to `.env.local`. And then add your own Quicknode API key and the Goerli testnet private key.

- 💳 You should have a installed a wallet like [Metamask](https://metamask.io/) and have some testnet ETH in it.

## Contracts

[https://goerli.etherscan.io/address/0xd6d3ed2e79745fd0fadd7d3fcf2e6bb7b221670d](https://goerli.etherscan.io/address/0xd6d3ed2e79745fd0fadd7d3fcf2e6bb7b221670d)

## Scripts

### Local Ethereum network 

Started a local Ethereum network that stays alive. 
Hardhat gave us 20 accounts to work with and gave them all 10000 ETH.

Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

```sh
npm run node
```

### Run the contract on dev mode

```sh
npm run deploy:dev
```

### Deploy the contract on local

```sh
npm run deploy:local
```

### Deploy the contract on Goerli testnet

```sh
npm run deploy:goerli
```

## Glossary

### Blockchain

Think of it as a cloud provider, kinda like AWS, but it's owned by no one. It's run by compute power from machines who want to support the network. Usually these people are called Nodes and they run client software to keep the network running while keeping our data or transactions stay on the network!

### Smart contract

Kinda like our server's code with different functions people can hit.

### Wallet

Kinda like our server's database, but it's on the blockchain. It's where we store our ETH and other tokens.

We need something to connect our dapp with our wallet so we can securely pass our wallet credentials. Our dapp can use those credentials to call our smart contract. You need to have valid credentials to access functions on smart contracts.

It's almost like authentication. We need something to "login" to the blockchain and then use those login credentials to make API requests from our dapp.

### Transaction

When we want to perform an action on the Ethereum blockchain we call it a transaction. For example, sending someone ETH is a transaction. Doing something that updates a variable in our contract is also considered a transaction.

So when we call wave and it does `totalWaves += 1`, that's a transaction! Deploying a smart contract is also a transaction.

### QuickNode

[QuickNode](https://www.quicknode.com/) essentially helps us broadcast our contract creation transaction so that it can be picked up by miners as quickly as possible. 
Once the transaction is mined, it is then broadcasted to the blockchain as a legit transaction. From there, everyone updates their copy of the blockchain.

So, QuickNode gives us a simple way to deploy to the real Ethereum blockchain.

Remember, the blockchain has no owner. It's just a bunch of computers around the world run by miners that have a copy of the blockchain.

When we deploy our contract, we need to tell all those miners, "hey, this is a new smart contract, please add my smart contract to the blockchain and then tell everyone else about it as well".

### Testnets

We should not deploy to the "Ethereum mainnet" until the very end.

Why? Because it costs real money and it's not worth messing up!

We're going to start with a "testnet" which is a clone of "mainnet" but it uses fake money so we can test stuff out as much as we want. 

But, it's important to know that testnets are run by actual miners and mimic real-world scenarios.
So, we can test our application in a real-world scenario where we're actually going to:

1. Broadcast our transaction

2. Wait for it to be picked up by actual miners

3. Wait for it to be mined

4. Wait for it to be broadcasted back to the blockchain telling all the other miners to update their copies

### Goerli

There are a few testnets out there and the one we'll be using is called [Goerli](https://goerli.net/) which is run by the Ethereum foundation.

In order to deploy to Goerli, we need fake ether.

Why? Because if you were deploying to the actual Ethereum mainnet, you'd use real money! So, testnets copy how mainnet works, only difference is no real money is involved.

In order to get fake ETH, we have to ask the network for some. This fake ETH will only work on this specific testnet. You can grab some fake ETH for [Goerli faucet](https://goerlifaucet.com/). Make sure that your MetaMask wallet is set to the "Goerli Test Network" before using faucet.

You'll need your private Goerli key (not your public address!) which you can grab from metamask and paste that in there as well.

Note: Accessing your private key can be done by opening MetaMask, change the network to "Goerli Test Network" and then click the three dots and select "Account Details" > "Export Private Key"

Why do you need to use your private key? Because in order to perform a transaction like deploying a contract, you need to "login" to the blockchain.
And, your username is your public address and your password is your private key.
It's kinda like logging into AWS or GCP to deploy.
