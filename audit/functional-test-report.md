# Functional tests 
Tests are conducted on the Kovan test network. The following contracts has been verified on Etherscan. 
  
## [`BeamToken[0x9618cc]`](https://kovan.etherscan.io/address/0x9618ccc20d14d132122d5050c1d19edbf38ac719#code) 
## [`BeamCrowdsale[0x920a79]`](https://kovan.etherscan.io/address/0x920a79643691e63a9329b8c4ed2afe1fa59e2af0#code) 

 
  
## Accounts 
  
* Owner: [0x006F3FCdDaf248D1a4C9A7fd62939963AAAe5a67](https://kovan.etherscan.io/address/0x006F3FCdDaf248D1a4C9A7fd62939963AAAe5a67) 
  
## Expected behaviour test of BeamToken 
- [x] Only owner can set the mint manager of the token contract. [0xa84ce2](https://kovan.etherscan.io/tx/0xa84ce2bdb5a01b8ee78b1c8cab700000f85b2c5cdb99ea4a105466ad8bd2bac8) 
- [x] Only manager can mint token. [0x284749](https://kovan.etherscan.io/tx/0x2847497cb28915397e139313b650c4ff9277b083d74a2cc6e07c8f985b73d3fb)
- [x] Only owner can lock investors. [0xdfd6a7](https://kovan.etherscan.io/tx/0xdfd6a760fc95b5b9d42c1ab059b08599ac3953f6a1af3745b98f5565066d7be1)
- [x] Token cannot be transfered when the investor is locked.[0x26a84d](https://kovan.etherscan.io/tx/0x26a84d1ccbb92936bfc01f1171abc2b57869b6074f55329d15450606b843bc06)
 
## Expected behaviour tests of BeamCrowdsale 
- [x] Seed round discount can be set only by the owner. [0x4ef6b3](https://kovan.etherscan.io/tx/0x4ef6b32b224f2569068291b4e1c2e1089ac979beeee680553bd4a19e4b5bd14a) 
- [x] Private round discount can be set only by the owner. [0x21d87c](https://kovan.etherscan.io/tx/0x21d87ccd9780efc8e13a44f25b988341a283fc40b123ffcf9cc9f20bcef2d94f) 
- [x] Public round discount can be set only by the owner. [0xcc0f46](https://kovan.etherscan.io/tx/0xcc0f46b5d350883ba0ee3fd662a51b9ce37f882f430148ea123859917264501c) 
- [x] Bonus can be minted only by the owner. [0x69da11](https://kovan.etherscan.io/tx/0x69da114b92deb415e6bc396610e310d5f4876c6a54b7c1ca0d11bfe982fd27c9) 
- [x] Investor can be added to whitelist only by the owner.[0xa179d2](https://kovan.etherscan.io/tx/0xa179d2a696914b688833a2fd22f639ac9ecdef5ff75f7447b3843e2f5cf3e0f4) 
- [x] ETH price can be updated only by the owner.[0x748aba](https://kovan.etherscan.io/tx/0x748aba6c7e7e98bc3809594baed3c416452c4056c1aec94642b5c850dd9d1fb8) 
- [x] Investors can buy tokens with the designated discount.[0x933a1c](https://kovan.etherscan.io/tx/0x933a1cae8af9d4d2c51a89adb33b0ea56d18511743910b8ca77098d4e93f94da) 
- [x] Investor can purchase tokens by USD through owner calling `buyForFiat()`.[0x963af5](https://kovan.etherscan.io/tx/0x963af586a2b5a95beb364d1de2a7c0a86e85004fd8de9e1219d056ac0d69df1f) 
- [x] ETH for transaction fee and refund can be paid to the contract by the onwer. [0xc7778d](https://kovan.etherscan.io/tx/0xc7778d263c7f765cf5eefe0320ba7eb0a4ac1284f783226bd0bcc176bdb11fce) 
- [x] Tokens can be transfered from crowdsale contract to investors. [0x6970cd](https://kovan.etherscan.io/tx/0x6970cd351374ee041d2ba7019f9b83f87068605a7cfec48301f0d5d006058b00) 
- [x] ETH can be withdrawn from the contract by the owner at any time. [0x81a92f](https://kovan.etherscan.io/tx/0x81a92fc3a882ea7a4597a99d7182eae5472aee7bc2267434eb17b46dde05125d) 
- [x] Seed round can be finished only by the owner. [0x89a298](https://kovan.etherscan.io/tx/0x89a2987f014b1b2ee0929deb460747fe640bcf6830a08405647d8170ae0a6c68) 
- [x] Only owner can switch the crowdsale between private sale[0xb7066d](https://kovan.etherscan.io/tx/0xb7066dcdcb97a6818ab0852d61f50aa81619c2e2d272d39dc92edeb54813c93d)  and public sale[0x9c3efe](https://kovan.etherscan.io/tx/0x9c3efe76173fbc7daff3cb010877cb3c1c794362d096230082292299f0538265). 
- [x] Crowdsale can be finished only by the owner. [0x72995b](https://kovan.etherscan.io/tx/0x72995baf070f17212339696381c17ad1a358def0d1047003f95f749e196aeaca) 
- [x] ETH can be claimed by investors once the crowdsale is finished and softcap is not reached. [0x9b0f0b](https://kovan.etherscan.io/tx/0x9b0f0bf8d7ef759885b0e29adeb93a12f3a18ad95b44fed9bf2395d90d0b508c) 
  