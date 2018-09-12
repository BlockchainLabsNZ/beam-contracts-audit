# Functional tests 
Tests are conducted on the Kovan test network. The following contracts has been verified on Etherscan. 
  
## [`BeamToken[0x537ceb]`](https://kovan.etherscan.io/address/0x537ceb7b0d169046d24789511e335a3499484f30#code) 
## [`BeamCrowdsale[0x168407]`](https://kovan.etherscan.io/address/0x7d729f0af9be0945b3eaf13e4017e26368f585b2#code) 
## [`CustomContract[0xbebb42]`](https://kovan.etherscan.io/address/0xbebb42a0fdbde6de2f2045b92831a47d13da0304#code)

 
  
## Accounts 
  
* Owner: [0x7e691f8bd61731043725fbfd36bd6e9b0c261fb2](https://kovan.etherscan.io/address/0x7e691f8bd61731043725fbfd36bd6e9b0c261fb2) 
  
## Expected behaviour test of BeamToken 
- [x] The mint manager of the token contract can be set only by the owner. [0xa84ce2](https://kovan.etherscan.io/tx/0xb5c95d37c10846880c6491f49134b3e85f2d2e8a5967690aae301d15bb4dea99) 
- [x] Token can be minted only by the mint manager. [0x284749](https://kovan.etherscan.io/tx/0x0131f7eedbd484ca0854c903aed067be30f3de88f742d898885e48b1c9485eaa)
- [x] investors can be locked only by the owner  . [0xdfd6a7](https://kovan.etherscan.io/tx/0x620c74c9b75fec4cc834cc35e55a31fa985b427d79295bb812b32c5ec26702dc)
- [x] Token cannot be transfered when the investor is locked.[0x26a84d](https://kovan.etherscan.io/tx/0x1dd4b35d5fca8e9eb7e67d8ea0aa25d075c535b26e02adca7c94c0ba21b020e5)
 
## Expected behaviour tests of BeamCrowdsale 
- [x] Seed round discount can be set only by the owner. [0x4ef6b3](https://kovan.etherscan.io/tx/0x80a55961319eeaf1e5b989259e5ff8cae634a144cf6fc1b070c24d000878e2f9) 
- [x] Private round discount can be set only by the owner. [0x21d87c](https://kovan.etherscan.io/tx/0x75ce63d026381e6fe520ee8490f811f541b487a8d7c66203687c623ee8858051) 
- [x] Public round discount can be set only by the owner. [0xcc0f46](https://kovan.etherscan.io/tx/0x0d67b460846425568a975bca5f7c8326f4aa90660bcd3c72a3926b38535f5770) 
- [x] Bonus can be minted only by the owner. [0x69da11](https://kovan.etherscan.io/tx/0x98d0a8dfcc2d439eb14c1266c4941a3a865235046c50b2639267b9cd49d1e5a1) 
- [x] Investor can be added to whitelist only by the owner.[0xa179d2](https://kovan.etherscan.io/tx/0xbff2f25808c9177cbcf3c349b058f1d78f6b80dc5ba68325a6e4b61341a4c35b) 
- [x] ETH price can be updated only by the owner.[0x748aba](https://kovan.etherscan.io/tx/0x9a43192f637509d04f63ed56aa20ee1c8c8d6c2039087c095a48d16f79239023) 
- [x] Investors can buy tokens with the designated discount.[0x933a1c](https://kovan.etherscan.io/tx/0x0618acd5f5f7aedfd576b8e778d980d92cc4fcc056a5f8be79992612daeb1b15) 
- [x] Investor can purchase tokens by USD through owner calling `buyForFiat()`.[0x963af5](https://kovan.etherscan.io/tx/0xc7eb17f58a63152f349b03f980b034b72bf2244d37c772a609ce2653c9c3647c) 
- [x] ETH for transaction fee and refund can be paid to the contract by the onwer. [0xc7778d](https://kovan.etherscan.io/tx/0x24272a5ad25707ad54ccfc0184373640565ae5f014db984f0f74ba472390bc04) 
- [x] Tokens can be transfered from crowdsale contract to investors. [0x6970cd](https://kovan.etherscan.io/tx/0x9524554e18ef77b80ef2f3fa76725a60dbc9fe544736283d85ee3f96e5a21cb4) 
- [x] ETH can be withdrawn from the contract by the owner at any time. [0x81a92f](https://kovan.etherscan.io/tx/0x6026b42746eaa251ec44924d217cc538886eb65f69d68c8c224624adeccbef82) 
- [x] Seed round can be finished only by the owner. [0x89a298](https://kovan.etherscan.io/tx/0x73635ae41aa398c5467db86c2d8fb25990196b9ad5d5c08767ad6dd216239694) 
- [x] Only owner can switch the crowdsale between private sale[0xb7066d](https://kovan.etherscan.io/tx/0x52bdc4c982837b1222c5fee02a22d2d03ea9230b2de3cc8990b31a15164eff4c)  and public sale[0x9c3efe](https://kovan.etherscan.io/tx/0xc1fdf294aba115cae4e0034d9604cea3ef864d3e4321bb5ecb48a173bef8779d). 
- [x] Crowdsale can be finished only by the owner. [0x72995b](https://kovan.etherscan.io/tx/0xc7ce2f9ae12b60d6392ec8545d1923d71672f18ed47295fc5348ff29a96f2e9d) 
- [x] ETH can be claimed by investors once the crowdsale is finished and softcap is not reached. [0x9b0f0b](https://kovan.etherscan.io/tx/0x39f41f6b89a01dc211bd4c667abe381acc9390a054d34df378aa90493f4f6687) 

## Expected behaviour tests of CustomContract
