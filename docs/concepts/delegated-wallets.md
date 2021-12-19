---
sidebar_position: 3
---

# Delegated Wallets

[DeCash API](/docs/api/overview) provides endpoints to create and manipulate Delegated Wallets -
virtual multi-purpose wallets controlled by users. Delegated wallets provide the following key
properties to the users of DeCash tokens:

+ DeCash API accepts transactions to Delegated Wallets and pay fees in [Algo](#TODO) on behalf of users.
+ DeCash API abstracts the [DeCash token opt-in](/docs/concepts/tokens#token-opt-in) procedure and will automatically opt Delegated Wallets in.

Users can interact with Delegated Wallets in the following manner:

![Delegated wallets scheme](/img/delegated-wallets.png)

You can find out all methods that allow you to work with delegated wallets in the [DeCash API docs](/docs/api/overview).


## Use cases

Delegated wallets can be used for a variety of use cases:

+ Creating temporary (hot) wallets for accepting purchases in [DeCash Tokens](/docs/concepts/tokens) (see the [guide](#TODO));
+ Paying to clients (if you are an exchange), which allows to opt-in their wallets automatically;
+ Batching transactions using [one-to-many transfers](/docs/api/algorand/one-to-many-transfer), for instance, to distribute tokens in one batch;
+ Using [many-to-one transfers](/docs/api/algorand/many-to-one-transfer), for instance, to collect tokens from many delegated wallets in one batch.