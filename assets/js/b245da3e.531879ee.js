"use strict";(self.webpackChunkdocs_decash_com=self.webpackChunkdocs_decash_com||[]).push([[7732],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,N=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},d="CloseDelegatedWallet",s={unversionedId:"api/algorand/close-delegated-wallet",id:"api/algorand/close-delegated-wallet",title:"CloseDelegatedWallet",description:'This API endpoint is being deprecated in favor of TransferTokens which have the new "max" parameter.',source:"@site/docs/api/algorand/close-delegated-wallet.mdx",sourceDirName:"api/algorand",slug:"/api/algorand/close-delegated-wallet",permalink:"/docs/api/algorand/close-delegated-wallet",editUrl:"https://github.com/DeCash-Official/docs.decash.com/edit/main/docs/api/algorand/close-delegated-wallet.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"AssetInfo",permalink:"/docs/api/algorand/asset-info"},next:{title:"CreateDelegatedWallet",permalink:"/docs/api/algorand/create-delegated-wallet"}},p=[{value:"Request Parameters",id:"request-parameters",children:[],level:2},{value:"Responses",id:"responses",children:[{value:"Regular response",id:"regular-response",children:[],level:3},{value:"Validation errors",id:"validation-errors",children:[],level:3},{value:"Sender not opted in",id:"sender-not-opted-in",children:[],level:3},{value:"Sender not enough funds",id:"sender-not-enough-funds",children:[],level:3},{value:"Receiver not opted in",id:"receiver-not-opted-in",children:[],level:3}],level:2},{value:"Example Usage",id:"example-usage",children:[],level:2},{value:"Example Success Response",id:"example-success-response",children:[],level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},u=m("Tabs"),c=m("TabItem"),N={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"closedelegatedwallet"},"CloseDelegatedWallet"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This API endpoint is being deprecated in favor of ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/algorand/transfer-tokens"},"TransferTokens"),' which have the new "max" parameter.'))),(0,l.kt)("p",null,"Close the balance of a DeCash asset of a ",(0,l.kt)("a",{parentName:"p",href:"/docs/concepts/delegated-wallets"},"Delegated Wallet"),", sending the remaining funds to another (regular or delegated) wallet."),(0,l.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"assetId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the DeCash asset that is being closed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sender")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{address:string}")),(0,l.kt)("td",{parentName:"tr",align:null},"Object containing the ",(0,l.kt)("inlineCode",{parentName:"td"},"address")," of the Delegated Wallet that is being closed. Note that this account must have enough funds to cover the ",(0,l.kt)("a",{parentName:"td",href:"#TODO"},"fee"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"receiver")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The address of the account that is receiving the remaining funds present in the ",(0,l.kt)("inlineCode",{parentName:"td"},"sender")," wallet. Note that, if this account is not a Delegated Wallet, then it must be opted into the token that is being sent.")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("h3",{id:"regular-response"},"Regular response"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"txns")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<{txn:string, signers:string[]}>")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of objects each containing a transaction (in msgpack) and an array of ",(0,l.kt)("inlineCode",{parentName:"td"},"signers")," (a list of addresses of the accounts that must sign the transaction). Transactions with an empty ",(0,l.kt)("inlineCode",{parentName:"td"},"signers")," array shall not be signed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{fee:number}")),(0,l.kt)("td",{parentName:"tr",align:null},"An object containing ",(0,l.kt)("inlineCode",{parentName:"td"},"fee"),", the amount of DeCash that is being spent on fees in this transaction. (e.g. 1.05 USDD)")))),(0,l.kt)("h3",{id:"validation-errors"},"Validation errors"),(0,l.kt)("p",null,"Returned when the parameters are invalid."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Status code"),(0,l.kt)("td",{parentName:"tr",align:null},"400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INVALID_PARAMS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Validation errors in CloseDelegatedWallet request."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errors")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of strings containing additional informations.")))),(0,l.kt)("h3",{id:"sender-not-opted-in"},"Sender not opted in"),(0,l.kt)("p",null,"Returned when the sender has not yet opted into the token that is being sent."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Status code"),(0,l.kt)("td",{parentName:"tr",align:null},"400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SENDER_NOT_OPTED_IN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Sender must opt in to the asset before sending funds."))))),(0,l.kt)("h3",{id:"sender-not-enough-funds"},"Sender not enough funds"),(0,l.kt)("p",null,"Returned when the sender does not have enough funds to pay both the transfer of the funds and the fee."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Status code"),(0,l.kt)("td",{parentName:"tr",align:null},"400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SENDER_NOT_ENOUGH_FUNDS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Sender does not have enough funds to send the requested amount."))))),(0,l.kt)("h3",{id:"receiver-not-opted-in"},"Receiver not opted in"),(0,l.kt)("p",null,"Returned when a user is sending funds to a non-",(0,l.kt)("a",{parentName:"p",href:"/docs/concepts/delegated-wallets"},"Delegated Wallet")," account that has not yet opted into the token that is being sent."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Status code"),(0,l.kt)("td",{parentName:"tr",align:null},"400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RECEIVER_NOT_OPTED_IN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Receiver must opt in to the asset before receiving funds."))))),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)(u,{mdxType:"Tabs"},(0,l.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const response = await fetch('https://delegator-dev01b.arringo.co/api-test/CloseDelegatedWallet', {\n  method: 'POST',\n  body: JSON.stringify({\n    'assetId': 'USDD',\n    'sender': {\n      'address': 'NBGKLNZDHMHCL7UPDMQBZPUF3JGQI3355WD5JPDB3U2ODNLAW6SDPO67JE',\n    },\n    'receiver': 'CNIOPGMZ3OSZLPEO7POGMVUEQVDV2RT3G4MSKGHRBX2SOPOEIOGBIFIMVQ'\n  }),\n});\nconst data = await response.json();\n")))),(0,l.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txns": [\n    {\n      "txn": "iqNhbXTOAAGGoKNmZWXND6CiZnbOASGEBKNnZW6sdGVzdG5ldC12MS4womdoxCBIY7UYpLPITsgQ8i1PEIHLD3HwWaesIN7GL39w5Qk6IqNncnDEIO8DmPqrNPuFpH1g0l0aF64t+rph+CD3L2e4+1497b8fomx2zgEhh+yjcmN2xCDM12b3NSoTfJdJSzDDROUq3CiWPHHdXRqae4X/G6GZuqNzbmTEIGvkIhQ8kyZFK6yPPqxPgOpyqgq3DUTTf62WCXzMNcePpHR5cGWjcGF5",\n      "signers": []\n    },\n    {\n      "txn": "iqRhYW10AaRhcmN2xCBr5CIUPJMmRSusjz6sT4DqcqoKtw1E03+tlgl8zDXHj6Jmds4BIYQEo2dlbqx0ZXN0bmV0LXYxLjCiZ2jEIEhjtRiks8hOyBDyLU8QgcsPcfBZp6wg3sYvf3DlCToio2dycMQg7wOY+qs0+4WkfWDSXRoXri36umH4IPcvZ7j7Xj3tvx+ibHbOASGH7KNzbmTEIGhMpbcjOw4l/o8bIBy+hdpNBG997YfUvGHdNOG1YLekpHR5cGWlYXhmZXKkeGFpZM4DGUVQ",\n      "signers": []\n    },\n    {\n      "txn": "iqZhY2xvc2XEIBNQ55mZ26WVvI773GZWhIVHXUZ7NxklGPEN9Sc9xEOMpGFyY3bEIBNQ55mZ26WVvI773GZWhIVHXUZ7NxklGPEN9Sc9xEOMomZ2zgEhhASjZ2VurHRlc3RuZXQtdjEuMKJnaMQgSGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiKjZ3JwxCDvA5j6qzT7haR9YNJdGheuLfq6Yfgg9y9nuPtePe2/H6Jsds4BIYfso3NuZMQgaEyltyM7DiX+jxsgHL6F2k0Eb33th9S8Yd004bVgt6SkdHlwZaVheGZlcqR4YWlkzgMZRVA=",\n      "signers": []\n    },\n    {\n      "txn": "iaVjbG9zZcQga+QiFDyTJkUrrI8+rE+A6nKqCrcNRNN/rZYJfMw1x4+iZnbOASGEBKNnZW6sdGVzdG5ldC12MS4womdoxCBIY7UYpLPITsgQ8i1PEIHLD3HwWaesIN7GL39w5Qk6IqNncnDEIO8DmPqrNPuFpH1g0l0aF64t+rph+CD3L2e4+1497b8fomx2zgEhh+yjcmN2xCBr5CIUPJMmRSusjz6sT4DqcqoKtw1E03+tlgl8zDXHj6NzbmTEIMzXZvc1KhN8l0lLMMNE5SrcKJY8cd1dGpp7hf8boZm6pHR5cGWjcGF5",\n      "signers": ["ZTLWN5ZVFIJXZF2JJMYMGRHFFLOCRFR4OHOV2GU2POC76G5BTG5DOBVU3E"]\n    }\n  ],\n  "info": { "asaFee": 0.01 }\n}\n')))}g.isMDXComponent=!0}}]);