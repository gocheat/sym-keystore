const keythereum = require('./utils/keythereum-sha3');

const SymKeystore = {
    privateCreateOptions: { keyBytes: 32, ivBytes: 16 },
    keystoreCreateOptions: {
        kdf: 'scrypt',
        cipher: 'aes-128-ctr',
        kdfparams: {
            c: 262144,
            dklen: 32,
            prf: 'hmac-sha256'
        }
    },
    listener: {
        PRIVATEKEY_CREATED: 'PRIVATEKEY_CREATED',
        KEYSTORE_CREATED: 'KEYSTORE_CREATED'
    },

    /**
     * keystore 생성
     * @param passphrase string
     * @param addData function
     * @param listener function
     * @return Promise
     */
    create (address, passphrase, listener) {
        return new Promise((res, rej) => {
            this.createPrivateKey(listener)
                .then(dk => {
                    return this.createKeystore(dk, address, passphrase, listener);
                }).then(keystore => {
                res(keystore);
            }).catch(e => {
                rej(e);
            });
        });
    },

    /**
     * privateKey 생성
     * @param createListener function
     * @return Promise
     */
    createPrivateKey (createListener) {
        return new Promise((res, rej) => {
            keythereum.create(this.privateCreateOptions, (dk) => {
                if (createListener) createListener(this.listener.PRIVATEKEY_CREATED);
                res(dk);
            });
        });
    },

    /**
     * keysotre 생성
     * @param dk object|array
     * @param passphrase object|array
     * @param createListener function
     * @return Promise
     */
    createKeystore (dk, address, passphrase, createListener) {
        return new Promise((res, rej) => {
            keythereum.dump(passphrase, dk.privateKey, dk.salt, dk.iv, this.keystoreCreateOptions, (keystore) => {
                if (createListener && createListener) {
                    createListener(this.listener.KEYSTORE_CREATED);
                }
                keystore["address"] = address
                res(keystore);
            });
        });
    },

    /**
     * PublicKey Hash 추출
     * @param pk hex string
     * @return string
     */
    getPublicKeyHash (pk) {
        return keythereum.privateKeyToHash(pk);
    },

    /**
     * 계정 잠금 해제
     * @param keystore object
     * @param passphrase string
     * @return Promise
     */
    unlock (keystore, passphrase) {
        return new Promise((res, rej) => {
            keythereum.recover(passphrase, keystore, privateKey => {
                res(privateKey);
            });
        });
    }
};

module.exports = SymKeystore;