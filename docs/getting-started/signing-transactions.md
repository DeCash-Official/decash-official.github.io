---
sidebar_position: 3
---

# Signing transactions
Before being able to submit transactions, you (or the user who owns the account from which the funds are being spent) need to sign them. For each different way in which you can create a wallet and maintain an account, there is a way to sign transactions.

For simplicity, in all of the following cases let us consider a transaction obtained from the following function:

```js
async function getTransactions(from) {
    const response = await fetch('https://delegator-dev01b.arringo.co/api-test/CreateDelegatedPayment', {
        method: 'POST',
        body: JSON.stringify({
            assetId: 'USDD',
            sender: {
                address: from,
                amount: 5,
            },
            receiver: 'CNIOPGMZ3OSZLPEO7POGMVUEQVDV2RT3G4MSKGHRBX2SOPOEIOGBIFIMVQ',
        }),
    });
    const {txns} = await response.json();
    return {txns};
}
```

## Signing with Algorand Wallet (WalletConnect)
If you (or your users) are using the Algorand Wallet, WalletConnect is the protocol that you will be using. In this guide we will suppose that some user is interacting with a web page, and is prompted to sign a transaction.

To use walletconnect, we need to import two modules: one for managing the connection with the wallet, and one to show a QR code that needs to be scanned in order to instantiate a connection.

```js
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
```

### Connecting to the wallet
To connect to a wallet, we will use the following function:

```js
async function setUpWallet() {
    const wallet = new WalletConnect({
        bridge: "https://bridge.walletconnect.org",
        qrcodeModal: QRCodeModal,
    });
    if (!wallet.connected) {
        wallet.createSession();
        await new Promise((resolve) => {
            wallet.on("connect", (error, payload) => {
                if (error) { throw error; }
                resolve();
            });
        });
    }
    return wallet;
}
```

Let us analyze it line by line. On the first four lines an instance of WalletConnect is created, which will be used for all consequent interactions with the wallet.

```js
const wallet = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: QRCodeModal,
});
```

If the user is not yet connected to its wallet, then `wallet.createSession()` is run, which prompts the user to scan a QR code. The function will then wait for the user to connect before returning.

```js
if (!wallet.connected) {
    wallet.createSession();
    await new Promise((resolve) => {
        wallet.on("connect", (error, payload) => {
            if (error) { throw error; }
            resolve();
        });
    });
}
```

In the meanwhile, the user will be able to open up the Algorand Wallet app, and scan the QR code

<img src="/img/algorandwallet_home.jpg" height="500px"/>
<img src="/img/algorandwallet_scan.jpg" height="500px"/>
<img src="/img/algorandwallet_connect.jpg" height="500px"/>

### Getting the account address
Now that we have an instance of WalletConnect open, it is possible to get the connected account by running

```js
wallet.accounts[0]
```

### Signing the transactions

The following snippet creates an array of objects, each containing the transaction itself and, for the transactions which should not be signed, an empty array of signers. 

```js
const group = txns.map(({txn, signers}) => (signers.length > 0) ? {txn} : {txn, signers: []})
```

Then, a request to sign the transactions is sent to the wallet

```js
const result = await wallet.sendCustomRequest({
    id: Date.now() + Math.floor(Math.random() * 1000),
    jsonrpc: "2.0",
    method: "algo_signTxn",
    params: [group],
});
```

When the request is sent, the application will show a request to sign a group of transactions. 

<img src="/img/algorandwallet_sign.jpg" height="500px"/>
<img src="/img/algorandwallet_moreinfo.jpg" height="500px"/>
<img src="/img/algorandwallet_confirm.jpg" height="500px"/>

Once signed, an array of transactions is returned. However, this array must be filtered in order to remove the transactions that were not signed, and to correctly encode the ones that were:

```js
const unsigned = txns.filter(({signers}) => signers.length == 0).map(({txn}) => txn);
const signed = result.filter(txn => txn != undefined).map(txn => btoa(String.fromCharCode.apply(null, txn)))
```

These results can then be sent to the `SubmitTransaction` endpoint for submission.

## Signing with MyAlgoWallet

Another way to sign transaction is by using MyAlgoWallet and MyAlgoConnect. Firstly, the MyAlgoConnect module must be imported:

```js
import MyAlgoConnect from '@randlabs/myalgo-connect';
```
### Connecting to the wallet and getting the addresses

Before being able to connect to a wallet, an instance of MyAlgoConnect must be created.

```js
const wallet = new MyAlgoConnect();
```

Then, by using that instance, it is possible to run

```js
const accounts = (await wallet.connect()).map(account => account.address);
```

to connect to the wallet and get the addresses of all connected accounts. When run, the user will be prompted with a popup asking for their wallet's password

<img src="/img/myalgoconnect_connect.png" height="500px"/>

After inserting their password, the prompt will ask the user to choose which accounts to connect

<img src="/img/myalgoconnect_select.png" height="500px"/>

### Signing the tranasctions

To sign the transactions, the `signTransaction` method can be used, but first, an array containing only the transactions that must be signed, needs to be created.

```js
const toSign = txns.filter(({signers}) => signers.length > 0).map(({txn}) => txn)
const result = await wallet.signTransaction(toSign)
```

When run, a popup wil appear, asking the user to confirm if they are fine with signing the shown transaction. Once accepted, the user is asked once more for their password.

<img src="/img/myalgoconnect_sign.png" height="500px"/>

Once signed, it is possible to encode the signed transactions to base64

```js
const unsigned = txns.filter(({signers}) => signers.length == 0).map(({txn}) => txn)
const signed = result.map(({blob}) => btoa(String.fromCharCode.apply(null, blob)));
```

so that they can be sent to the `SubmitTransaction` endpoint.

## Signing with AlgoSigner

The last wallet for which we'll show how to sign transactions is AlgoSigner. Since AlgoSigner injects itself into the `window` object, we do not need to import any library.

### Connecting to the wallet

To connect to a wallet, the following snippet can be run:

```js
await AlgoSigner.connect();
```

When run, a pop-up will appear, asking the user to enter their password, and to confirm that they actually want to connect the wallet to the website, enabling it to read the list of accounts, and send requests to sign transactions.

<img src="/img/algosigner_connect.png" height="500px"/>

Note that no instance of the wallet is returned. The AlgoSigner object will instead be used for all following operations.   

### Getting the addresses

To get the addresses of all connected accounts, the function `AlgoSigner.accounts` can be used. As a parameter, we must specify which ledger we are using: TestNet, or MainNet.

```js
const accounts = await AlgoSigner.accounts({ledger: 'TestNet'}).map(account => account.address);
```

### Signing the transactions

Lastly, the function `AlgoSigner.signTxn` can be run. Its result should be filtered to remove all unsigned transactions, and mapped to a base64 encoding.

```js 
const unsigned = txns.filter(({signers}) => signers.length == 0).map(({txn}) => txn)
const signed = (await AlgoSigner.signTxn(txns))
    .filter(txn => txn != undefined)
    .map(({blob}) => blob);
```

When run, a pop-up will ask to confirm each transaction, and then for the user's password.

<img src="/img/algosigner_accept1.png" height="500px"/>
<img src="/img/algosigner_accept2.png" height="500px"/>
<img src="/img/algosigner_accept3.png" height="500px"/>
<img src="/img/algosigner_confirm.png" height="500px"/>

## Signing with the KMD

Next, let us take a look at how to sign transactions with the [KMD](https://developer.algorand.org/docs/clis/kmd/).

### Connecting to the KMD

Firstly, a connection to the KMD is needed:

```js
const kmd = new algosdk.Kmd(TOKEN, BASE_SERVER, PORT)
```

Once connected to the KMD, it is necessary to initialize a "connection" with the wallet that will be signing the transaction. To do this, we must first obtain the ID of the address (which, in this case, will be done by finding the wallet with the correct name). Once we have obtained the wallet ID, we must initialize a wallet handle (which requires the wallet ID, and the wallet password). 

```js
const { wallets } = (await kmd.listWallets());
const wallet = wallets.find(({ name }) => name === WALLET_NAME);
const handle = (await kmd.initWalletHandle(wallet.id, WALLET_PASSWORD)).wallet_handle_token;
```

Now that we have obtained a handle for this wallet, we can use it for the next actions.

### Signing a transaction

To sign a transaction with the KMD, we must provide it the Transaction object that we want to sign. Therefore, we can filter all the transactions that must be signed, decode them, and then call the `kmd.signTransaction` method.

```js
const unsigned = txns.filter(({ signers }) => signers.length === 0).map(({ txn }) => txn);
const signed = await Promise.all(txns
    .filter(({ signers }) => signers.length > 0)
    .map(({ txn }) => algosdk.decodeUnsignedTransaction(Buffer.from(txn, 'base64')))
    .map((txn) => kmd.signTransaction(handle, PASSWORD, txn)))
```

Once obtained the arrays of unsigned and signed transactions, we can submit them to the `SubmitTransaction` endpoint. 

After using the wallet handle, it is important to release it (to not allow it to be used again to sign other transactions).

```js
await kmd.releaseWalletHandle(handle);
```

## Signing with the SDK

Lastly, we will take a look at how transactions can be signed directly with the [SDK](https://algorand.github.io/js-algorand-sdk/).
Firstly, each transaction that needs to be signed must be decoded from base64 to a transaction object:

```js
const toSign = txns
    .filter(({signers}) => signers.length > 0)
    .map(({txn, signers}) => ({
        signers: signers,
        txn: algosdk.decodeUnsignedTransaction(Buffer.from(txn, 'base64'))
    }))
```

Then, each transaction can be signed with the `signTxn` method, with as a parameter the secret key of the signing account, before being re-encoded into base64:

```js
const signed = toSign
    .map(({txn, signers}) => txn.signTxn(accounts[signers[0]]))
    .map((txn) => Buffer.from(txn).toString('base64'));
```

Then, together with the array of unsigned transactions

```js
const unsigned = txns
    .filter(({signers}) => signers.length === 0).map(({txn}) => txn);
```

It will be possible to make a submission to the `SubmitTransaction` endpoint.
