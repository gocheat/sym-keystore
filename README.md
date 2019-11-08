# Symverse Keystore Unlock

###### npm: https://www.npmjs.com/package/symkeystore

## Installation
#### Node.js
```javascript
npm i symkeystore
```

#### Yarn
```javascript
yarn add symkeystore
```

A minified, browserified file `dist/symkeystore.js` is included for use in the browser. Including this file simply attaches the `symkeystore` object to window:
```$xslt
<script src='dist/symkeystore.js'></script>
```

### PrivateKey Create and Keystore Unlock example

```javascript
// Return Promise Object
const privateKey = await SymKeystore.createPrivateKey()
// 913838440f0a8b44da21763696c964c5b530ce77171aea952856e83898f8beec


// Return Promise Object ( privateKey )
const privateKey = await SymKeystore.unlock(keystore, "1234")
// c957d40b1293733571c4156ab60dc48e0629839c51ea49d769047562159cb9cf
```

## Contact
<https://www.symverse.com/><br> Please contact us on this page.
