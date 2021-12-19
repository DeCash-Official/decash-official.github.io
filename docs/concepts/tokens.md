---
sidebar_position: 1
---

# DeCash tokens

DeCash tokens are multi-currency stablecoins [backed](https://www.decash.com/transparency/) by DeCash.
It means that users holding DeCash tokens like USDD, which represent United States Dollar, hold the
same amount of fiat currency (USD), which they can withdraw by selling their DeCash tokens on one of the
exchanges DeCash tokens are listed.

Technically, DeCash tokens use [Algorand](https://www.algorand.com/) blockchain. Each individual DeCash
token (USDD, EURD, etc) is an [Algorand Standard Asset](https://developer.algorand.org/docs/get-details/asa/) (ASA).
Read more about why DeCash has chosen Algorand, its specifics and assets on the [Algorand Ecosystem page](#TODO-algorand/overview).

## Why DeCash tokens are unique

Unlike other stablecoins, DeCash tokens abstract the complexity of the blockchain away, still allowing you to
control your assets without centralization. Read more about [DeCash](https://www.decash.com/).

Most importantly, DeCash abstracts the transaction fees you typically
need to pay in the other cryptocurrency, like [Ether](https://ethereum.org/en/) in Ethereum or Algo in
[Algorand](https://www.algorand.com/). Instead, when using DeCash tokens you pay fees in DeCash tokens itself:
for instance, by transferring 100 USDD tokens, you will pay a fixed 0.01 USDD in fees.

DeCash also combines the simplicity with strong security, making you to be the only person who holds
private keys from your accounts. You manage your crypto wallet on your own, while DeCash just provides you
with tools to transact and work with DeCash tokens.


## Token addresses

Here is the list of DeCash's tokens in the **main Algorand network**:

+ [CFHD](https://algoexplorer.io/asset/445924570) (asset ID `445924570`)
+ [EURD](https://algoexplorer.io/asset/445907756) (asset ID `445907756`)
+ [GBPD](https://algoexplorer.io/asset/445935868) (asset ID `445935868`)
+ [USDD](https://algoexplorer.io/asset/445925266) (asset ID `445925266`)

The following tokens are used in the **test Algorand network**:

+ [CFHD](https://testnet.algoexplorer.io/asset/43119734) (asset ID `43119734`)
+ [EURD](https://testnet.algoexplorer.io/asset/43119735) (asset ID `43119735`)
<!-- + [GBPD](?) (asset ID `?`) - Is it deployed? -->
+ [USDD](https://testnet.algoexplorer.io/asset/41673857) (asset ID `41673857`)

DeCash also issues tokens on Ethereum, however, due to high transaction fees they aren't used for transactions.
You can find the list of Ethereum-based tokens [here](https://github.com/DeCash-Official/smart-contracts).


## Token opt-in

Because DeCash tokens use [Algorand blockchain](/docs/concepts/algorand), in order to see DeCash tokens
and receive DeCash tokens to your regular [Algorand wallet](/docs/concepts/algorand#wallets),
you first need to [opt-in](https://developer.algorand.org/docs/get-details/asa/#receiving-an-asset)
your Algorand account into each DeCash token that you will be using. Before performing manual opt-in you
will need some [Algo](#TODO - how to get algo), the Algorand currency.

:::tip
When using [DeCash API](/docs/api/overview) and [delegated wallets](#TODO), the opt-in procedure is handled for you by DeCash API.
Read more in the [API](/docs/api/overview) section.
:::

[Read more](#TODO-opt-in-guide) about how to opt-in to DeCash tokens.