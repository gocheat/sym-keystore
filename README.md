# Symverse Keystore
Symverse blockchain private key and keystore library

## Getting Started

#### Prerequisites
What things you need to install the software and how to install them
```javascript
npm i sym-keystore
or
yarn add sym-keystore
```
#### In Node.js 
```javascript
import SymKeystore from 'sym-keystore'
or
const SymKeystore  = require('sym-keystore')

```

A minified, browserified file `dist/symkeystore.js` is included for use in the browser. Including this file simply attaches the `symkeystore` object to window:
```$xslt
<script src='dist/sym-keystore.js'></script>
```

## Example

Create private key
```javascript
const pk = await SymKeystore.createPrivateKey()
console.log(pk.privateKey.toString("hex"))
// 126e74656995e8817d083dd03d15fdb33a164d7fa26d33248c547aa329a91bc4
```
Create keystore with private key
```javascript
const pk = await SymKeystore.createPrivateKey()
const keystore = await SymKeystore.createKeystore(pk, "00020000000000110002", "1234")
/* { address: '00020000000000110002',
  crypto:
   { cipher: 'aes-128-ctr',
     ciphertext:
      '186a4fea3397c3f5207cc3c7a8b6a3f844a71cd9a2b1387ec2b1355d225deddc',
     cipherparams: { iv: 'daefde5f153debb577bc1160d35a60c8' },
     mac:
      '72bef590b3b775eb91c9174176f2a3391c6ceb646ec20194bd37de69c79817fb',
     kdf: 'scrypt',
     kdfparams:
      { dklen: 32,
        n: 262144,
        r: 8,
        p: 1,
        salt:
         'f6cc461d4916e7c85c3de0d273d40c1bb55353e62a9bbae91d92ab7892696b60' } },
  id: 'ee04b6cb-4b8e-4345-a562-47ce752a51e1',
  version: 3 }
*/
```
Create keystore
```javascript
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
```

Unlock keystore
```javascript
const privateKey = await SymKeystore.unlock(keystore, "1234")
// 7d6ea722afd799f5f9aaf677aadbd28d922e4e5cb655e08796763946a39732e3
```

PrivateKey to PublicKeyHash
```javascript
const publicKeyHash = SymKeystore.getPublicKeyHash("53818cf8fd96461ff6bcd8a6c0abbe43fe6966a3a3f4a4eef30b13d6292def74")
//0x67f02e157be9a4b833a3393c3880126619f99462
```
