"use strict";(self.webpackChunkdocs_decash_com=self.webpackChunkdocs_decash_com||[]).push([[620],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9028:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={sidebar_position:2},c="Algorand ecosystem",i={unversionedId:"concepts/algorand",id:"concepts/algorand",title:"Algorand ecosystem",description:"DeCash tokens use Algorand blockchain. Comparing to Ethereum,",source:"@site/docs/concepts/algorand.md",sourceDirName:"concepts",slug:"/concepts/algorand",permalink:"/docs/concepts/algorand",editUrl:"https://github.com/DeCash-Official/docs.decash.com/edit/main/docs/concepts/algorand.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"DeCash tokens",permalink:"/docs/concepts/tokens"},next:{title:"Delegated Wallets",permalink:"/docs/concepts/delegated-wallets"}},p=[{value:"Wallets",id:"wallets",children:[],level:2},{value:"Networks",id:"networks",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"algorand-ecosystem"},"Algorand ecosystem"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/tokens"},"DeCash tokens")," use ",(0,o.kt)("a",{parentName:"p",href:"https://www.algorand.com/"},"Algorand")," blockchain. Comparing to ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/"},"Ethereum"),",\nAlgorand has these advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low fees, which equal to fractions of a penny."),(0,o.kt)("li",{parentName:"ul"},"Almost instant transaction confirmations."),(0,o.kt)("li",{parentName:"ul"},"Smart contracts and ",(0,o.kt)("a",{parentName:"li",href:"https://developer.algorand.org/docs/get-details/dapps/smart-contracts/#smart-signatures"},"smart signatures"),",\nwhich allow for out-of-the-box transaction delegation.")),(0,o.kt)("p",null,"DeCash tokens abstract Algorand, meaning that you don't need to think of the underlying blockchain architecture and instead use\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/overview"},"convenient API")," provided by DeCash. However, from the user's perspective, the user still needs to install and\nmanage any ",(0,o.kt)("a",{parentName:"p",href:"#wallets"},"Algorand Wallet")," of their choice."),(0,o.kt)("h2",{id:"wallets"},"Wallets"),(0,o.kt)("p",null,"In order to use and transact in ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/tokens"},"DeCash tokens"),", you need to obtain any Algorand wallet. Pick any of the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=algorand+wallet"},"existing wallets")," supporting ",(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"WalletConnect"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://algorandwallet.com/"},"Algorand official wallet")," (mobile app)")),(0,o.kt)("p",null,"There are other wallets available which don't support WalletConnect as of 2021:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.purestake.com/technology/algosigner/"},"AlgoSigner")," (a Chrome extension wallet)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wallet.myalgo.com/"},"My Algo Algorand Wallet")," (web-based wallet)")),(0,o.kt)("h2",{id:"networks"},"Networks"),(0,o.kt)("p",null,"DeCash uses two networks on Algorand:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Algorand ",(0,o.kt)("a",{parentName:"li",href:"https://algoexplorer.io/"},"main network")),(0,o.kt)("li",{parentName:"ul"},"Algorand ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.algoexplorer.io/"},"test network"))),(0,o.kt)("p",null,"To find out which assets are used in these networks, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/tokens/#token-addresses"},"token addresses"),"."))}d.isMDXComponent=!0}}]);