---
sidebar_position: 1
---

# DeCash tokens

DeCash tokens are multi-currency stablecoins [backed](https://www.decash.com/transparency/) by DeCash.
It means that users holding DeCash tokens like USDD, which represent United States Dollar, hold the
same amount of fiat currency (USD), which they can withdraw by selling their DeCash tokens on one of the
exchanges in which DeCash tokens are listed.

Technically, DeCash tokens use [Algorand](https://www.algorand.com/) blockchain. Each individual DeCash
token (USDD, EURD, etc) is an [Algorand Standard Asset](https://developer.algorand.org/docs/get-details/asa/) (ASA).
Read more about why DeCash has chosen Algorand, its specifics and assets on the [Algorand Ecosystem page](/docs/concepts/algorand).


## Why DeCash tokens are unique

Unlike other stablecoins, DeCash tokens abstract the complexity of the blockchain away, still allowing you to
control your assets without centralization. Read more about [DeCash](https://www.decash.com/).

Most importantly, DeCash abstracts the transaction fees you typically
need to pay in the other cryptocurrency, like [Ether](https://ethereum.org/en/) in Ethereum or Algo in
[Algorand](https://www.algorand.com/). Instead, when using DeCash tokens you pay fees in DeCash tokens itself:
for instance, by transferring 100 USDD tokens, you will pay a fixed 0.01 USDD in fees.

DeCash also combines the simplicity with strong security, making you to be the only person who holds
private keys from your accounts. You manage your crypto wallet on your own, while DeCash just provides you
with tools to transact and work with DeCash tokens, represented by [DeCash API](/docs/api/overview) and
[Delegated Wallets](/docs/concepts/delegated-wallets).


## Token addresses

Here is the list of DeCash's tokens in the **main Algorand network**:

+ [CFHD](https://algoexplorer.io/asset/445924570) (asset ID `445924570`)
+ [EURD](https://algoexplorer.io/asset/445907756) (asset ID `445907756`)
+ [GBPD](https://algoexplorer.io/asset/445935868) (asset ID `445935868`)
+ [USDD](https://algoexplorer.io/asset/445925266) (asset ID `445925266`)

The following tokens are used in the **test Algorand network**:

+ [CFHD](https://testnet.algoexplorer.io/asset/51987790) (asset ID `51987790`)
+ [EURD](https://testnet.algoexplorer.io/asset/51987793) (asset ID `51987793`)
+ [GBPD](https://testnet.algoexplorer.io/asset/99251476) (asset ID `99251476`)
+ [USDD](https://testnet.algoexplorer.io/asset/51987792) (asset ID `51987792`)

DeCash also issues tokens on Ethereum, however, due to high transaction fees they aren't used for transactions.
You can find the list of Ethereum-based tokens [here](https://github.com/DeCash-Official/smart-contracts).


## Token opt-in

:::warning
In the DeCash ecosystem, when using [DeCash API](/docs/api/overview) and [delegated wallets](/docs/concepts/delegated-wallets),
the opt-in procedure is handled for you by DeCash API. Read more in the [API](/docs/api/overview) section.
:::

If you even need to send DeCash tokens from [delegated wallets](/docs/concepts/delegated-wallets) to a
regular Algorand wallet, you would need [opt this token into](https://developer.algorand.org/docs/get-details/asa/#receiving-an-asset)
using DeCash assets. This is required by Algorand as DeCash tokens built on top of the [Algorand blockchain](/docs/concepts/algorand).
Before performing manual opt-in you will need to have some [Algo](/docs/getting-started/getting-algo) on that wallet.

[Read more](/docs/getting-started/wallets#opt-in-to-decash-tokens) about how to opt-in to DeCash tokens.
