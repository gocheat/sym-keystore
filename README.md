# Symverse Keystore Unlock

###### npm: https://www.npmjs.com/package/sym-keystore

## Installation
#### Node.js
```javascript
npm i sym-keystore
```

#### Yarn
```javascript
yarn add sym-keystore
```

#### Used 
```javascript
import SymKeystore from 'sym-keystore'
or
const SymKeystore  = require('sym-keystore')
```

A minified, browserified file `dist/symkeystore.js` is included for use in the browser. Including this file simply attaches the `symkeystore` object to window:
```$xslt
<script src='dist/sym-keystore.js'></script>
```

### PrivateKey Create and Keystore Unlock example

```javascript

// create privateKey
const pk = await SymKeystore.createPrivateKey()
console.log(pk.privateKey.toString("hex"))
// 126e74656995e8817d083dd03d15fdb33a164d7fa26d33248c547aa329a91bc4

// create keystore
const keystore = await SymKeystore.create("00020000000000110002", "1234") // input symid(10byte) and passphrase
/* { address: '00020000000000110002',
      crypto:
       { cipher: 'aes-128-ctr',
         ciphertext:
          '58cda18fb63d5795551faa733bc8bab4eea7508e53c3e7a7108611318f37f416',
         cipherparams: { iv: 'a6b02a74f6ef0242241964469b57cbd4' },
         mac:
          'eec677c0e258888fed5df5ac8137c4584064dca4af4124c7959c82997286b949',
         kdf: 'scrypt',
         kdfparams:
          { dklen: 32,
            n: 262144,
            r: 8,
            p: 1,
            salt:
             '7f77420ed613e66b7fcedc6706d576cfbc2bcc6232b4f092962a5c4a208baffd' } },
      id: '65576468-3a8d-480d-8f95-36fae04155ac',
  version: 3 } */

// unlock keystore
const privateKey = await SymKeystore.unlock(keystore, "1234")
// 7d6ea722afd799f5f9aaf677aadbd28d922e4e5cb655e08796763946a39732e3

// PrivateKey to PublicKeyHash
const publicKeyHash = SymKeystore.getPublicKeyHash("53818cf8fd96461ff6bcd8a6c0abbe43fe6966a3a3f4a4eef30b13d6292def74")
//0x67f02e157be9a4b833a3393c3880126619f99462

```

## Contact
<https://www.symverse.com/><br> Please contact us on this page.
