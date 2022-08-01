"use strict";(self.webpackChunkdocs_decash_com=self.webpackChunkdocs_decash_com||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Concepts","items":[{"type":"link","label":"DeCash tokens","href":"/docs/concepts/tokens","docId":"concepts/tokens"},{"type":"link","label":"Algorand ecosystem","href":"/docs/concepts/algorand","docId":"concepts/algorand"},{"type":"link","label":"Delegated Wallets","href":"/docs/concepts/delegated-wallets","docId":"concepts/delegated-wallets"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/docs/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Prepare your wallet","href":"/docs/getting-started/wallets","docId":"getting-started/wallets"},{"type":"link","label":"Getting Algo","href":"/docs/getting-started/getting-algo","docId":"getting-started/getting-algo"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Signing transactions","href":"/docs/guides/signing-transactions","docId":"guides/signing-transactions"},{"type":"link","label":"Merchandise store","href":"/docs/guides/merchant","docId":"guides/merchant"}],"collapsible":true,"collapsed":true}],"api":[{"type":"link","label":"Overview","href":"/docs/api/overview","docId":"api/overview"},{"type":"link","label":"Fees","href":"/docs/api/fees","docId":"api/fees"},{"type":"category","label":"API","items":[{"type":"link","label":"AssetInfo","href":"/docs/api/algorand/asset-info","docId":"api/algorand/asset-info"},{"type":"link","label":"CloseDelegatedWallet","href":"/docs/api/algorand/close-delegated-wallet","docId":"api/algorand/close-delegated-wallet"},{"type":"link","label":"CreateDelegatedWallet","href":"/docs/api/algorand/create-delegated-wallet","docId":"api/algorand/create-delegated-wallet"},{"type":"link","label":"CreateTransactionGroup","href":"/docs/api/algorand/create-transaction-group","docId":"api/algorand/create-transaction-group"},{"type":"link","label":"GetApplication","href":"/docs/api/algorand/get-application","docId":"api/algorand/get-application"},{"type":"link","label":"ManyToOneTransfer","href":"/docs/api/algorand/many-to-one-transfer","docId":"api/algorand/many-to-one-transfer"},{"type":"link","label":"OneToManyTransfer","href":"/docs/api/algorand/one-to-many-transfer","docId":"api/algorand/one-to-many-transfer"},{"type":"link","label":"SubmitTransaction","href":"/docs/api/algorand/submit-transaction","docId":"api/algorand/submit-transaction"},{"type":"link","label":"TransactionStatus","href":"/docs/api/algorand/transaction-status","docId":"api/algorand/transaction-status"},{"type":"link","label":"TransferTokens","href":"/docs/api/algorand/transfer-tokens","docId":"api/algorand/transfer-tokens"},{"type":"link","label":"WalletsInfo","href":"/docs/api/algorand/wallets-info","docId":"api/algorand/wallets-info"}],"collapsible":true,"collapsed":true}]},"docs":{"api/algorand/asset-info":{"id":"api/algorand/asset-info","title":"AssetInfo","description":"Returns information about every supported token (or about the queried assetId token).","sidebar":"api"},"api/algorand/close-delegated-wallet":{"id":"api/algorand/close-delegated-wallet","title":"CloseDelegatedWallet","description":"This API endpoint is being deprecated in favor of TransferTokens which have the new \\"max\\" parameter.","sidebar":"api"},"api/algorand/create-delegated-wallet":{"id":"api/algorand/create-delegated-wallet","title":"CreateDelegatedWallet","description":"Create a Delegated Wallet, given an owner wallet that controls it.","sidebar":"api"},"api/algorand/create-transaction-group":{"id":"api/algorand/create-transaction-group","title":"CreateTransactionGroup","description":"Create a generic transaction group.","sidebar":"api"},"api/algorand/get-application":{"id":"api/algorand/get-application","title":"GetApplication","description":"Get details and state of an application.","sidebar":"api"},"api/algorand/many-to-one-transfer":{"id":"api/algorand/many-to-one-transfer","title":"ManyToOneTransfer","description":"Consider using CreateTransactionGroup endpoint for combining transfers.","sidebar":"api"},"api/algorand/one-to-many-transfer":{"id":"api/algorand/one-to-many-transfer","title":"OneToManyTransfer","description":"Consider using CreateTransactionGroup endpoint for combining transfers.","sidebar":"api"},"api/algorand/submit-transaction":{"id":"api/algorand/submit-transaction","title":"SubmitTransaction","description":"Submits a previously issued transaction group that has been signed by the user.","sidebar":"api"},"api/algorand/transaction-status":{"id":"api/algorand/transaction-status","title":"TransactionStatus","description":"Checks the status of a previously submitted transaction. Normally, transactions are finalized within 1-5 seconds on the Algorand blockchain, but it can take a while longer if the blockchain is busy at the moment.","sidebar":"api"},"api/algorand/transfer-tokens":{"id":"api/algorand/transfer-tokens","title":"TransferTokens","description":"Deprecated. Consider using CreateTransactionGroup with one transfer transaction.","sidebar":"api"},"api/algorand/wallets-info":{"id":"api/algorand/wallets-info","title":"WalletsInfo","description":"Returns balance and other information for a list of provided wallet addresses.","sidebar":"api"},"api/fees":{"id":"api/fees","title":"Fees","description":"DeCash API takes a small fee for making transactions. This fee is withhold in the transaction amount currency: for instance,","sidebar":"api"},"api/overview":{"id":"api/overview","title":"Overview","description":"DeCash has released a beta versions of its API for testing. This API can still receive breaking changes.","sidebar":"api"},"concepts/algorand":{"id":"concepts/algorand","title":"Algorand ecosystem","description":"Under the hood, DeCash tokens use Algorand blockchain, which is abstracted","sidebar":"docs"},"concepts/delegated-wallets":{"id":"concepts/delegated-wallets","title":"Delegated Wallets","description":"Delegated Wallets are primary wallets used across DeCash ecosystem, which can be controlled by traditional Algorand wallets.","sidebar":"docs"},"concepts/tokens":{"id":"concepts/tokens","title":"DeCash tokens","description":"DeCash tokens are multi-currency stablecoins backed by DeCash.","sidebar":"docs"},"getting-started/getting-algo":{"id":"getting-started/getting-algo","title":"Getting Algo","description":"For development purposes, you will need to obtain some Algo - the Algorand blockchain currency,","sidebar":"docs"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"When working with DeCash API, you will need a library to talk to it, as well","sidebar":"docs"},"getting-started/wallets":{"id":"getting-started/wallets","title":"Prepare your wallet","description":"For the development and testing purposes, you will need the Algorand wallet. See the list","sidebar":"docs"},"guides/merchant":{"id":"guides/merchant","title":"Merchandise store","description":"This page will guide you through the example of building the merchandise store using DeCash tokens.","sidebar":"docs"},"guides/signing-transactions":{"id":"guides/signing-transactions","title":"Signing transactions","description":"Before being able to submit transactions, you (or the user who owns the account from which the funds are being spent)","sidebar":"docs"},"intro":{"id":"intro","title":"Introduction","description":"DeCash is the independent multi-currency stablecoin which combines","sidebar":"docs"}}}')}}]);