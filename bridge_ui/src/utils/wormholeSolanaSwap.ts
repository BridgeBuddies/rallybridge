import { Provider } from "@project-serum/anchor"

import { TOKEN_PROGRAM_ID, Token } from '@solana/spl-token';

import { web3, BN } from '@project-serum/anchor';

import { NodeWallet } from '@metaplex/js';

import {
    canonicalSwapProgram,
    swapWrappedForCanonical,
} from 'dfs-js';


const { Connection, clusterApiUrl, PublicKey, Keypair } = web3;


const canonicalMint = new PublicKey(
    "RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq"
);

const canonicalData = new PublicKey(
    "4wkz5UF7ziY3Kuz1vxkZBakcZrRoTfup4XPASdhDfnpk"
);

const wormholeMint = new PublicKey(
    "6Y7LNYkHiJHSH8zR2HvZQzXD3QA9yFw64tyMHxBxDRe4"
);

const wormholeData = new PublicKey(
    "BuvUZWrTnrBkacCikXsoGW1zA1yMt7D1okq3ZDJrDft8"
);

const ten = new BN(10);

export const getProvider = (walletKeyPair: any, cluster: any) => {

    const wallet = new NodeWallet(walletKeyPair)
    const connection = new Connection(clusterApiUrl(cluster));
    const provider = new Provider(connection, wallet, {});

    return { provider, connection, wallet }

}

export const getOrCreateAssociatedAccount = async (token: any, pubKey: any) => {

    const accountInfo = await token.getOrCreateAssociatedAccountInfo(pubKey);
    return accountInfo.address;

}


export async function swapwormholeRallyForCanonicalSolana(keypair: any, amount: any) {

    const loadedKeyPair = web3.Keypair.fromSecretKey(new Uint8Array(JSON.parse(keypair)));

    const { provider, wallet, connection } = getProvider(loadedKeyPair, 'mainnet-beta')
    const { payer } = wallet;
    const canSwap = await canonicalSwapProgram(provider);

    let { decimals } = await canSwap.account.canonicalData.fetch(canonicalData)

    const ten = new BN(10)
    decimals = new BN(decimals)
    let destAmount = new BN(amount)

    //convert to decimal units
    destAmount = destAmount.mul(ten.pow(decimals))

    //decimals of destination-

    const wormholeToken = new Token(connection, new PublicKey(wormholeMint), TOKEN_PROGRAM_ID, payer)
    const canonicalToken = new Token(connection, new PublicKey(canonicalMint), TOKEN_PROGRAM_ID, payer)

    const { decimals: wormDec } = await wormholeToken.getMintInfo()

    const wormholeTokenAccount = await getOrCreateAssociatedAccount(wormholeToken, wallet.payer.publicKey);
    const canonicalTokenAccount = await getOrCreateAssociatedAccount(canonicalToken, wallet.payer.publicKey);

    let { amount: wormBalance } = await wormholeToken.getAccountInfo(wormholeTokenAccount);

    const balance = wormBalance.div(ten.pow(new BN(wormDec))).toNumber();

    console.log("wormholeTokenAccount " + wormholeTokenAccount);
    console.log("canonicalTokenAccount " + canonicalTokenAccount);
    console.log("wormBalance " + balance);

    if (balance < Number(amount)) {
        return console.log(`insufficent funds, your wormhole $RLY balance is currently ${balance} `)
    }

    const tx = await swapWrappedForCanonical({
        canSwap,
        canonicalMint: canonicalMint,
        wrappedMint: wormholeMint,
        canonicalData: canonicalData,
        wrappedData: wormholeData,
        sourceTokenAccount: wormholeTokenAccount,
        destinationTokenAccount: canonicalTokenAccount,
        destinationAmount: destAmount,
        wallet
    })

    console.log(tx)

    await connection.confirmTransaction(tx)

    console.log(`${destAmount.div(ten.pow(decimals)).toNumber()} of ${wormholeMint} swapped for ${canonicalMint} sent to ${canonicalTokenAccount.toBase58()} `)
}