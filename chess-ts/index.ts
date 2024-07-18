// code
import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'


// data
import { LLG } from './abi/contract'
import { user } from './key/user1'


// public [read operations]
const client = createPublicClient({
  transport: http('https://bsc.meowrpc.com'),
})


// private [write operations]
const account = privateKeyToAccount('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80')

const wallet = createWalletClient({
  account,
  transport: http('https://bsc.meowrpc.com')
})


// read block number from binance
const blockNumber = await client.getBlockNumber()



// read balance from the LLG contract
const [balance] = await Promise.all([
  client.readContract({
    ...LLG,
    functionName: 'balanceOf',
    args: ['0x34aD53757d9489FBC43D3030325817646F1E1C38']
  }),
])

// const { request } = await client.simulateContract({
//   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
//   ...LLG,
//   functionName: 'claimReward',
//   account: '0x34aD53757d9489FBC43D3030325817646F1E1C38',
// })



// export info to be shown in the html file
export default [
  `contract-address: ${LLG.address}`,
  `block: ${blockNumber}`,
  `balance ${balance}`
]
