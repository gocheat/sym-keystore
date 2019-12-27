/**
 * keystore.spec.js
 */
const SymKeystore =  require("../index.js");

describe("Keystore Test", function () {
    it("Create privateKey", async() => {
        const privateKey = await SymKeystore.createPrivateKey()
        console.log(privateKey.privateKey.toString("hex"))
    });
    it("Create keystore & unlock Test", async() => {
        const keystore = await SymKeystore.create("00020000000000110002", "1234")
        const pk = await SymKeystore.unlock(keystore, "1234")
        console.log(keystore)
        console.log(pk.toString("hex"))
    });
    it("get publickey hash", async() => {
        const publicKeyHash = SymKeystore.getPublicKeyHash("53818cf8fd96461ff6bcd8a6c0abbe43fe6966a3a3f4a4eef30b13d6292def74")
        console.log(publicKeyHash)
   });
});
