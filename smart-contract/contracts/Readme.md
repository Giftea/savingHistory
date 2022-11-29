# DAO / Public Good

# Steps : Users

## Step 1

Create a Proposal following a template on https://proposal.savinghistory.xyz, accept comment and feedback for the next 7 days. Wait for approval from administrator to proceed to next step. Administrator can be any of our initial committe member.

User creating proposal with add budget and mod can approve budget and community also.

## Step 2

Create a Proposal on Snapshot and wait for the approval from one of the Administrator to accept it. To create a propsal on snapshot, user needs to have minimum of 1% of the circulating SSAVEH Token.

## Step 3

Create a Entry on Discorse on https://proposal.savinghistory.com. With the details of the histroy with comments and review from the community. Then when Adminstrator accept the history to be piblished, upload the details on IPFS on the platform and payment will be released.


```
{
  "Enviroment": "MUMBAI TESTNET",
  "USDC": "0xb96E918488e0690ea2BCEF6C5B394bb32249f016",
  "Donation Miner Proxy": "0xd11e64179397f25c64E955F22D26d25301C12BF2",
  "Donation Miner Implementation": "0x5499c617cd5cb891E0a4654b6fcAB858575c8e0B",
  "Treasury Proxy": "0x89491bfab9877fb8395132b500030733bdd5ef22",
  "Treasury Implementation": "0x8fc0a7b4547d1d395adfa034475161dca3be7e6c",
  "SAVEH Token": "0x3e5Bf19116432443138746C7f2364e9d368086e1",
  "SSAVEH Token": "0x79C7b0C865f4b78476EF7cc22cab62Fe9d4Ce716",
  "Staking  Implementation": "0x340e1d8b936e260e91bb357d10576ca5e3648907",
  "Staking Proxy": "0x1a4bd8feb66fbe2bd39554c7812084ff97ba946b"
}
```

### Verified

```json
{
  "SAVEHToken": "https://mumbai.polygonscan.com/address/0x3e5Bf19116432443138746C7f2364e9d368086e1#code",
  "SSAVEHToken": "https://mumbai.polygonscan.com/address/0x79C7b0C865f4b78476EF7cc22cab62Fe9d4Ce716#code",
  "Treasury Proxy": "https://mumbai.polygonscan.com/address/0x89491bfab9877fb8395132b500030733bdd5ef22#readProxyContract",
  "Donation Miner Proxy": "https://mumbai.polygonscan.com/address/0xd11e64179397f25c64E955F22D26d25301C12BF2#readProxyContract",
  "Staking Proxy": "https://mumbai.polygonscan.com/address/0x340e1d8b936e260e91bb357d10576ca5e3648907#readProxyContract"
}
```

### Formula for Calculating Current Epoch Time left

Reward Starting Block = 29293517   
Blocks Between each Epoch(Mumbai) = 17280 (Currently used) . 

Blocks left to complete Epoch = Blocks Between each Epoch - ((Current Block - Start Block) % Blocks Between each Epoch) . 

Time Left = Blocks left to complete Epoch x 5 secs block interval / (60 x 60) . 

Result will be e.g 22.1 hours 

NB: To get current block number `await ethers.provider.getBlockNumber()`.  
