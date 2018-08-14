# Dynamic Analysis

```
  Contract: BeamCrowdsale
    high-level purchase
      ✓ should log purchase (342ms)
      ✓ should log purchase for fiat (250ms)
      ✓ should assign tokens to sender (302ms)
      ✓ should forward funds to the wallet (465ms)
    control functions
      ✓ should allow to cliam funds after the crowdsale finish not hiting the soft cap (377ms)
      ✓ should revert buying tokens after the finish of crowdsale (429ms)
      ✓ should revert buying tokens from not-whitelisted buyer
      ✓ should double the token supply excluding bonuses at the finish and transfer these (521ms)
      ✓ should revert the purchase when crowdsale is paused and then process one when unpaused (328ms)
      ✓ another functionality (1167ms)

  Contract: StandardToken
    total supply
      ✓ returns the total amount of tokens
    balanceOf
      when the requested account has no tokens
        ✓ returns zero
    transfer
      when the recipient is not the zero address
        when the sender does not have enough balance
          ✓ reverts
        when the sender has enough balance
          ✓ transfers the requested amount (86ms)
          ✓ emits a transfer event (81ms)
      when the recipient is the zero address
        ✓ reverts
    approve
      when the spender is not the zero address
        when the sender has enough balance
          ✓ emits an approval event (56ms)
          when there was no approved amount before
            ✓ approves the requested amount (69ms)
          when the spender had an approved amount
            ✓ approves the requested amount and replaces the previous one (70ms)
        when the sender does not have enough balance
          ✓ emits an approval event (41ms)
          when there was no approved amount before
            ✓ approves the requested amount (59ms)
          when the spender had an approved amount
            ✓ approves the requested amount and replaces the previous one (60ms)
      when the spender is the zero address
        ✓ approves the requested amount (65ms)
        ✓ emits an approval event (41ms)
    transfer from
      when the recipient is not the zero address
        when the spender has enough approved balance
          when the owner has enough balance
            ✓ transfers the requested amount (86ms)
            ✓ decreases the spender allowance (71ms)
            ✓ emits a transfer event (66ms)
          when the owner does not have enough balance
            ✓ reverts
        when the spender does not have enough approved balance
          when the owner has enough balance
            ✓ reverts
          when the owner does not have enough balance
            ✓ reverts
      when the recipient is the zero address
        ✓ reverts
    decrease approval
      when the spender is not the zero address
        when the sender has enough balance
          ✓ emits an approval event (44ms)
          when there was no approved amount before
            ✓ keeps the allowance to zero (78ms)
          when the spender had an approved amount
            ✓ decreases the spender allowance subtracting the requested amount (95ms)
        when the sender does not have enough balance
          ✓ emits an approval event (46ms)
          when there was no approved amount before
            ✓ keeps the allowance to zero (64ms)
          when the spender had an approved amount
            ✓ decreases the spender allowance subtracting the requested amount (78ms)
      when the spender is the zero address
        ✓ decreases the requested amount (69ms)
        ✓ emits an approval event (44ms)
    increase approval
      when the spender is not the zero address
        when the sender has enough balance
          ✓ emits an approval event (45ms)
          when there was no approved amount before
            ✓ approves the requested amount (72ms)
          when the spender had an approved amount
            ✓ increases the spender allowance adding the requested amount (69ms)
        when the sender does not have enough balance
          ✓ emits an approval event (47ms)
          when there was no approved amount before
            ✓ approves the requested amount (78ms)
          when the spender had an approved amount
            ✓ increases the spender allowance adding the requested amount (73ms)
      when the spender is the zero address
        ✓ approves the requested amount (70ms)
        ✓ emits an approval event (47ms)


  47 passing (21s)
```
