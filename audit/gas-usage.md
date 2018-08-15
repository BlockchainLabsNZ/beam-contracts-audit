# Gas Usage

```
  Contract: BeamCrowdsale
    high-level purchase
      ✓ should log purchase (247670 gas)
      ✓ should log purchase for fiat (211875 gas)
      ✓ should assign tokens to sender (247492 gas)
      ✓ should forward funds to the wallet (247670 gas)
    control functions
      ✓ should allow to cliam funds after the crowdsale finish not hiting the soft cap (328672 gas)
      ✓ should revert buying tokens after the finish of crowdsale (395371 gas)
      ✓ should revert buying tokens from not-whitelisted buyer (84768 gas)
      ✓ should double the token supply excluding bonuses at the finish and transfer these (425611 gas)
      ✓ should revert the purchase when crowdsale is paused and then process one when unpaused (327146 gas)
      ✓ another functionality (906405 gas)

  Contract: StandardToken
    total supply
      ✓ returns the total amount of tokens (68124 gas)
    balanceOf
      when the requested account has no tokens
        ✓ returns zero (68124 gas)
    transfer
      when the recipient is not the zero address
        when the sender does not have enough balance
          ✓ reverts (92711 gas)
        when the sender has enough balance
          ✓ transfers the requested amount (105649 gas)
          ✓ emits a transfer event (105649 gas)
      when the recipient is the zero address
        ✓ reverts (91134 gas)
    approve
      when the spender is not the zero address
        when the sender has enough balance
          ✓ emits an approval event (114056 gas)
          when there was no approved amount before
            ✓ approves the requested amount (114056 gas)
          when the spender had an approved amount
            ✓ approves the requested amount and replaces the previous one (76864 gas)
        when the sender does not have enough balance
          ✓ emits an approval event (114056 gas)
          when there was no approved amount before
            ✓ approves the requested amount (114056 gas)
          when the spender had an approved amount
            ✓ approves the requested amount and replaces the previous one (76864 gas)
      when the spender is the zero address
        ✓ approves the requested amount (112776 gas)
        ✓ emits an approval event (112776 gas)
    transfer from
      when the recipient is not the zero address
        when the spender has enough approved balance
          when the owner has enough balance
            ✓ transfers the requested amount (75820 gas)
            ✓ decreases the spender allowance (75820 gas)
            ✓ emits a transfer event (75820 gas)
          when the owner does not have enough balance
            ✓ reverts (71586 gas)
        when the spender does not have enough approved balance
          when the owner has enough balance
            ✓ reverts (72027 gas)
          when the owner does not have enough balance
            ✓ reverts (71586 gas)
      when the recipient is the zero address
        ✓ reverts (69997 gas)
    decrease approval
      when the spender is not the zero address
        when the sender has enough balance
          ✓ emits an approval event (100214 gas)
          when there was no approved amount before
            ✓ keeps the allowance to zero (100214 gas)
          when the spender had an approved amount
            ✓ decreases the spender allowance subtracting the requested amount (78088 gas)
        when the sender does not have enough balance
          ✓ emits an approval event (100214 gas)
          when there was no approved amount before
            ✓ keeps the allowance to zero (100214 gas)
          when the spender had an approved amount
            ✓ decreases the spender allowance subtracting the requested amount (78088 gas)
      when the spender is the zero address
        ✓ decreases the requested amount (98934 gas)
        ✓ emits an approval event (98934 gas)
    increase approval
      when the spender is not the zero address
        when the sender has enough balance
          ✓ emits an approval event (115036 gas)
          when there was no approved amount before
            ✓ approves the requested amount (115036 gas)
          when the spender had an approved amount
            ✓ increases the spender allowance adding the requested amount (77844 gas)
        when the sender does not have enough balance
          ✓ emits an approval event (115036 gas)
          when there was no approved amount before
            ✓ approves the requested amount (115036 gas)
          when the spender had an approved amount
            ✓ increases the spender allowance adding the requested amount (77844 gas)
      when the spender is the zero address
        ✓ approves the requested amount (113756 gas)
        ✓ emits an approval event (113756 gas)

·------------------------------------------------------------------------------------------------|----------------------------·
│                                              Gas                                               ·  Block limit: 6721975 gas  │
·····························································|···································|·····························
│  Methods                                                   ·            21 gwei/gas            ·       286.94 usd/eth       │
····························|································|···········|···········|···········|··············|··············
│  Contract                 ·  Method                        ·  Min      ·  Max      ·  Avg      ·  # calls     ·  usd (avg)  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale_TEST_ONLY  ·  __callback                    ·        -  ·        -  ·    62958  ·          10  ·       0.38  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  __callback                    ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  addAddressesToWhitelist       ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  addAddressToWhitelist         ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  buyForFiat                    ·        -  ·        -  ·   148917  ·           1  ·       0.90  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  buyTokens                     ·        -  ·        -  ·   184712  ·           2  ·       1.11  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  claimFunds                    ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  finishCrowdsale               ·        -  ·        -  ·    81180  ·           3  ·       0.49  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  finishSeedRound               ·        -  ·        -  ·    44436  ·           1  ·       0.27  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  mintBonus                     ·        -  ·        -  ·    67817  ·           1  ·       0.41  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  payToContract                 ·        -  ·        -  ·    21804  ·           1  ·       0.13  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  removeAddressesFromWhitelist  ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  removeAddressFromWhitelist    ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  setDiscountPrivate            ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  setDiscountPublic             ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  setDiscountSeed               ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  setPublicRound                ·        -  ·        -  ·    30241  ·           1  ·       0.18  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  transferTokens                ·        -  ·        -  ·    29122  ·           1  ·       0.18  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  update                        ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamCrowdsale            ·  withdrawFunds                 ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  approve                       ·    30932  ·    45932  ·    44382  ·          21  ·       0.27  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  claimOwnership                ·    19525  ·    19541  ·    19533  ·           2  ·       0.12  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  decreaseApproval              ·    30810  ·    32156  ·    31787  ·           8  ·       0.19  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  finishMinting                 ·        -  ·        -  ·    28370  ·           1  ·       0.17  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  increaseApproval              ·    31912  ·    46912  ·    42842  ·           8  ·       0.26  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  mint                          ·        -  ·        -  ·    68124  ·          24  ·       0.41  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  pause                         ·    28450  ·    43530  ·    35990  ·           2  ·       0.22  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  setLock                       ·    14795  ·    44653  ·    29724  ·           2  ·       0.18  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  setManager                    ·        -  ·        -  ·        -  ·           0  ·          -  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  transfer                      ·    37525  ·    52525  ·    41275  ·           4  ·       0.25  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  transferFrom                  ·        -  ·        -  ·    29888  ·           3  ·       0.18  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  transferOwnership             ·    44096  ·    44533  ·    44315  ·           2  ·       0.27  │
····························|································|···········|···········|···········|··············|··············
│  BeamToken                ·  unpause                       ·    14088  ·    28186  ·    21137  ·           2  ·       0.13  │
····························|································|···········|···········|···········|··············|··············
│  Deployments                                               ·                                   ·  % of limit  ·             │
·····························································|···········|···········|···········|··············|··············
│  BeamCrowdsale_TEST_ONLY                                   ·  2258606  ·  2258670  ·  2258652  ·      33.6 %  ·      13.61  │
·····························································|···········|···········|···········|··············|··············
│  BeamToken                                                 ·        -  ·        -  ·  1251553  ·      18.6 %  ·       7.54  │
·------------------------------------------------------------|-----------|-----------|-----------|--------------|-------------·

  47 passing (55s)
```
