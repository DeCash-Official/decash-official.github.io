---
sidebar_position: 2
---

# Algorand ecosystem

[DeCash tokens](../tokens/) use [Algorand](https://www.algorand.com/) blockchain. Comparing to [Ethereum](https://ethereum.org/en/),
Algorand has these advantages:

+ Low fees, which equal to fractions of a penny.
+ Almost instant transaction confirmations.
+ Smart contracts and [smart signatures](https://developer.algorand.org/docs/get-details/dapps/smart-contracts/#smart-signatures),
  which allow for out-of-the-box transaction delegation.

DeCash tokens abstract Algorand, meaning that you don't need to think of the underlying blockchain architecture and instead use
the [convenient API](/docs/api/overview) provided by DeCash. However, from the user's perspective, the user still needs to install and
manage any [Algorand Wallet](#wallets) of their choice.


## Wallets

In order to use and transact in [DeCash tokens](../tokens), you need to obtain any Algorand wallet. Pick any of the
[existing wallets](https://www.google.com/search?q=algorand+wallet) supporting [WalletConnect](https://walletconnect.com/):

+ [Algorand official wallet](https://algorandwallet.com/) (mobile app)

There are other wallets available which doesn't support WalletConnect as of 2021:

+ [AlgoSigner](https://www.purestake.com/technology/algosigner/) (a Chrome extension wallet)
+ [My Algo Algorand Wallet](https://wallet.myalgo.com/) (web-based wallet)


## Networks

DeCash uses two networks on Algorand:

+ Algorand main network
+ Algorand test network

To find out which assets assets are used in these network, see [token addresses](../tokens/#token-addresses).


## Token opt-in

In Algorand, in order to receive DeCash tokens, you first need to [opt-in](https://developer.algorand.org/docs/get-details/asa/#receiving-an-asset)
your Algorand account into each token that you will be using. When using [DeCash API](/docs/api/overview) and delegated
wallets, the opt-in procedure is handled for you by DeCash API.

However, when using regular Algorand accounts, you would need to perform opt-in yourself by sending the opt-in transaction
yourself from your Algorand wallet. Also, this procedure requires you to have some Algo
