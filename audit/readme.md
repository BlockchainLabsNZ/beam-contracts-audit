# Beam Smart Contract Audit Report
<br>

## Preamble
This audit report was undertaken by <b>BlockchainLabs.nz</b> for the purpose of providing feedback to <b>HubbleLand</b>. <br>It has subsequently been shared publicly without any express or implied warranty.

Solidity contracts were sourced directly from the HubbleLand team, we would encourage all community members and token holders to make their own assessment of the contracts once they are deployed and verified.

<br>

## Scope
The following contract was a subject for static, dynamic and functional analyses:

Contracts
  - [BeamCrowdsale.sol](https://github.com/BlockchainLabsNZ/beam-contracts-audit/blob/audit/contracts/BeamCrowdsale.sol)
  - [BeamToken.sol](https://github.com/BlockchainLabsNZ/beam-contracts-audit/blob/audit/contracts/BeamToken.sol)
<br>

## Focus areas
The audit report is focused on the following key areas - though this is not an exhaustive list.


### Correctness
- No correctness defects uncovered during static analysis?
- No implemented contract violations uncovered during execution?
- No other generic incorrect behaviour detected during execution?
- Adherence to adopted standards such as ERC20?

### Testability
- Test coverage across all functions and events?
- Test cases for both expected behaviour and failure modes?
- Settings for easy testing of a range of parameters?
- No reliance on nested callback functions or console logs?
- Avoidance of test scenarios calling other test scenarios?

### Security
- No presence of known security weaknesses?
- No funds at risk of malicious attempts to withdraw/transfer?
- No funds at risk of control fraud?
- Prevention of Integer Overflow or Underflow?

### Best Practice
- Explicit labeling for the visibility of functions and state variables?
- Proper management of gas limits and nested execution?
- Latest version of the Solidity compiler?

<br>

## Analysis

- [Test coverage](test-coverage.md)
- [Dynamic tests](dynamic-analysis.md)

<br>

## Issues

### Severity Description
<table>
<tr>
  <td>Minor</td>
  <td>A defect that does not have a material impact on the contract execution and is likely to be subjective.</td>
</tr>
<tr>
  <td>Moderate</td>
  <td>A defect that could impact the desired outcome of the contract execution in a specific scenario.</td>
</tr>
<tr>
  <td>Major</td>
  <td> A defect that impacts the desired outcome of the contract execution or introduces a weakness that may be exploited.</td>
</tr>
<tr>
  <td>Critical</td>
  <td>A defect that presents a significant security vulnerability or failure of the contract across a range of scenarios.</td>
</tr>
</table>

### Minor
- **Typo in event name MenegerUpdated** - `Correctness` [#L16](https://github.com/BlockchainLabsNZ/beam-contracts-audit/blob/master/contracts/BeamToken.sol#L16]) and [#L70](https://github.com/BlockchainLabsNZ/beam-contracts-audit/blob/master/contracts/BeamToken.sol#L70])  [View on GitHub](https://github.com/BlockchainLabsNZ/beam-contracts-audit/issues/6)
- **Prefer explicit declaration of variable types** - `Best practice` Prefer to use explicit variables types. It is recommended to explicitly define your variable types and keep consistency. This confirms your intent and safeguards against a future when the default type changes. [#L411](https://github.com/BlockchainLabsNZ/beam-contracts-audit/blob/master/contracts/BeamToken.sol#L411]) Prefer `uint256` instead of `uint`.  [View on GitHub](https://github.com/BlockchainLabsNZ/beam-contracts-audit/issues/4)
- **Function docstring not accurate to function** - `Best practice` The `_postValidatePurchase` docstring mentions that the function should use `revert` statements to rollback when valid conditions are not met. The `_checkSeed` and `_checkSoftCap` functions do not use any reverts. [#L873-L874](https://github.com/BlockchainLabsNZ/beam-contracts-audit/blob/master/contracts/BeamCrowdsale.sol#L873-L874])  [View on GitHub](https://github.com/BlockchainLabsNZ/beam-contracts-audit/issues/3)
- **Avoid magic numbers** - `Best practice` In `BeamCrowdsale.sol` there are some hard coded values, this code could be more readable/maintainable if the values were saved to a variable instead. The two `oraclize_query` functions contain this line: `if (price > 1 ether + tx.gasprice*200000) return 0; // unexpectedly high price`  [View on GitHub](https://github.com/BlockchainLabsNZ/beam-contracts-audit/issues/1)

### Moderate
- **Race condition found when user claiming their ETH from the contract** - `Best practice`, Security` [#L643-L644](https://github.com/BlockchainLabsNZ/beam-contracts-audit/blob/3544b886cf847af0cf4c39dfa1b05d30df419813/contracts/BeamCrowdsale.sol#L643-L644]) This is a typical race condition. It can cause you lose all the ETHs deposited in the contract. Fixing is required! [More infor about Race Condition](https://github.com/ConsenSys/smart-contract-best-practices/blob/master/docs/known_attacks.md#reentrancy)  [View on GitHub](https://github.com/BlockchainLabsNZ/beam-contracts-audit/issues/5)

### Major
- None found

### Critical
- None found


<br>

## Observations

- The function `setPublicRound` allows you to start/finish a public or private round. There is no check that the public or private round has already been finished, so it would be possible to start either round multiple times

<br>

## Conclusion

The developers demonstrated an understanding of Solidity and smart contract development, and they have used a previously audited framework to build their contracts from. We took part in carefully reviewing all source code provided, including static, dynamic, and functional testing methodology.

Overall we consider the resulting contracts following the audit feedback period adequate and have not identified any potential vulnerabilities. This contract has a low level risk of ETH and BEAM being hacked or stolen from the inspected contracts.


<hr>

### Disclaimer

Our team uses our current understanding of the best practises for Solidity and Smart Contracts. Development in Solidity and for Blockchain is an emerging area of software engineering which still has a lot of room to grow, hence our current understanding of best practise may not find all of the issues in this code and design.

We have not analysed any of the assembly code generated by the Solidity compiler. We have not verified the deployment process and configurations of the contracts. We have only analysed the code outlined in the scope. We have not verified any of the claims made by any of the organisations behind this code.

Security audits do not warrant bug-free code. We encourge all users interacting with smart contract code to continue to analyse and inform themselves of any risks before interacting with any smart contracts.
