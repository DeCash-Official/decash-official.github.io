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
            assetId: 'usdd',
            sender: {
                address: from,
                amount: 5,
            },
            receiver: 'CNIOPGMZ3OSZLPEO7POGMVUEQVDV2RT3G4MSKGHRBX2SOPOEIOGBIFIMVQ',
        }),
    });
    const {noSign, toSign} = await response.json();
    return {noSign, toSign};
}
```

## Signing with Algorand Wallet (WalletConnect)
If you (or your users) are using the Algorand Wallet, WalletConnect is the protocol that you will be using. In this guide we will suppose that some user is interacting with a web page, and is prompted to sign a transaction.

To use walletconnect, we need to import two scripts: one for managing the connection with the wallet, and one to show a QR code:
```html
<script type="text/javascript" src="/img/https://github.com/WalletConnect/walletconnect-monorepo/releases/download/1.7.0/qrcode-modal.min.js"></script>
<script type="text/javascript" src="/img/https://github.com/WalletConnect/walletconnect-monorepo/releases/download/1.7.0/client.min.js"></script>
```
Since Algorand uses a custom WalletConnect protocol, one last script which enables communication in that protocol is needed. This library is not available as a minified file, so we will be using Browserify.
Firstly, we'll install json-rpc-tools and browserify with npm:
```sh
npm i @json-rpc-tools/utils browserify
```
Then, we create a file `main.js`:
```js
var jsonRpcTools = require("@json-rpc-tools/utils");
global.window.jsonRpcTools = jsonRpcTools
```
Then, the following command is run to convert the library into a browser compatible module
```sh
browserify main.js -o bundle.js
```
Once run, it will be possible to import the `json-rpc-tools` library as a script:
```html
<script src="/bundle.js"></script>
```

### Connecting to the wallet
To connect to a wallet, we will use the following function:
```js
async function setUpWallet() {
    const wallet = new WalletConnect.default({
        bridge: "https://bridge.walletconnect.org",
        qrcodeModal: WalletConnectQRCodeModal.default,
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
Let us analyze it line by line. On the first four lines, an instance of WalletConnect is created, which will be used for all consequent interactions with the wallet.
```js
const wallet = new WalletConnect.default({
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: WalletConnectQRCodeModal.default,
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
const group = noSign.map(txn => ({
    txn: txn,
    signers: [],
})).concat(toSign.map(txn => ({
    txn: txn,
})));
```
Then, a request to sign the transactions is sent to the wallet
```js
const request = jsonRpcTools.formatJsonRpcRequest("algo_signTxn", [group]);
const result = await wallet.sendCustomRequest(request);
```
When the request is sent, the application will show a request to sign a group of transactions. 

<img src="/img/algorandwallet_sign.jpg" height="500px"/>
<img src="/img/algorandwallet_moreinfo.jpg" height="500px"/>
<img src="/img/algorandwallet_confirm.jpg" height="500px"/>

Once signed, an array of transactions is returned. However, this array must be filtered to remove the transactions that were not signed, and to correctly encode the ones that were:
```js
const signed = result.filter(txn => txn != undefined).map(txn => btoa(String.fromCharCode.apply(null, txn)))
```
This results can then be sent to the `SubmitTransaction` endpoint for submission.


## Signing with MyAlgoWallet
Another way to sign transaction is by using MyAlgoWallet and MyAlgoConnect. Firstly, the myalgo script must be imported:
```html
<script type="text/javascript" src="/img/https://github.com/randlabs/myalgo-connect/releases/download/v1.1.1/myalgo.min.js"></script>
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
to connect to the wallet and get the addresses of all connected accounts.

When run, the user will be prompted with a popup asking for their wallet's password

<img src="/img/myalgoconnect_connect.png" height="500px"/>

After inserting their password, the prompt will ask the user to choose which accounts to connect

<img src="/img/myalgoconnect_select.png" height="500px"/>

### Signing the tranasctions
To sign the transactions, the `signTransaction` method can be used.
```js
const result = await wallet.signTransaction(toSign)
```
When run, a popup wil appear, asking the user to confirm if they are fine with signing the shown transaction. Once accepted, the user is asked once more for their password.

<img src="/img/myalgoconnect_sign.png" height="500px"/>

Once signed, it is possible to encode the signed transactions to base64
```js
const signed = result.map(txn => btoa(String.fromCharCode.apply(null, txn.blob)));
```
so that they can be sent to the `SubmitTransaction` endpoint.

## Signing with AlgoSigner
The last wallet for which we'll show how to sign transactions is AlgoSigner. To work with AlgoSigner, first, the AlgoSigner script must be imported:
```html
<script type="text/javascript" src="/img/chrome-extension://kmmolakhbgdlpkjkcjkebenjheonagdm/AlgoSigner.min.js"></script>
```
### Connecting to the wallet
To connect to a wallet, the following snippet can be run:
```js
await AlgoSigner.connect();
```
When run, a pop-up will appear, asking the user to enter their password, and to confirm that they actually want to connect the wallet to the website, enabling it to read the list of accounts, and send requests to sign transactions.

<img src="/img/algosigner_connect.png" height="500px"/>

Note that no instance of the wallet is returned. the AlgoSigner object will instead be used for all following operations.


### Getting the addresses
To get the addresses of all connected accounts, the function `AlgoSigner.accounts` can be used. As a parameter, we must specify which ledger we are using: TestNet, or MainNet.
```js
const accounts = await AlgoSigner.accounts({ledger: 'TestNet'}).map(account => account.address);
```

### Signing the transactions
Lastly, to sign the transactions, all transactions must be converted to objects which contains the transaction itself, and an empty signer array if the transaction should not be signed.
```js
const group = noSign.map(txn => ({txn, signers: []}))
    .concat(toSign.map(txn => ({txn})))
```
The function `AlgoSigner.signTxn` can then be run. Its result should then be filtered to remove all unsigned transactions, and mapped to a base64 encoding.
```js 
const signed = (await AlgoSigner.signTxn(group))
    .filter(txn => txn != undefined)
    .map(txn => txn.blob);
```
When run, a pop-up will ask to confirm each transaction, and then for the user's password.
<img src="/img/algosigner_accept1.png" height="500px"/>
<img src="/img/algosigner_accept2.png" height="500px"/>
<img src="/img/algosigner_accept3.png" height="500px"/>
<img src="/img/algosigner_confirm.png" height="500px"/>

## Signing with the SDK

Lastly, we will take a look at how transactions can be signed directly from the SDK.
Firstly, the transaction must be decoded from base64 to a transaction object:
```js
const toSignDecoded = toSign.map(t => algosdk.decodeUnsignedTransaction(Buffer.from(t, 'base64')));
```
Then, each transaction can be signed with the `signTxn` method, with as a parameter the secret key of the signing account:
```js
const signed = toSignDecoded.map(txn => txn.signTxn(signer.sk));
```
After signing, transactions should be re-encoded into base64, before submission to the `SubmitTransaction` endpoint.
```js
const signedEncoded = signed.map(t => algosdk.decodeUnsignedTransaction(Buffer.from(t, 'base64')))
```

## Signing with the KMD
