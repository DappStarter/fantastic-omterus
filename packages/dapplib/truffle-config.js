require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million pupil hope permit frame twin'; 
let testAccounts = [
"0x150aa479ac785d34d5e896354578ee79c2b098d38ee0453fc93720f191aac83a",
"0x96482fe48d2789fb21f043ff9a896443e3167c6003bbc056481b502cf3a2337a",
"0x4eb9214e054f00f7417a4b718ee3af58d00bfa0ad50f915414fc3f5a40260e3e",
"0x8049e4b13a6ba1bd61b9aad9c6ef293f1fbc399c3f4041063c27ebf95c3706d3",
"0x05782c536322a1d9c48e927ea7d1547fc260d1608d2a7d1a3d69777eb0d1e533",
"0xed627c2d20109cbb59bf1f36712fe8e69456562acdbcd8e0e56f7d715a1b43b9",
"0xa677d5dd7df9f08c23103391834855f52fd8c2c04ca725e73658ae40daedcb4c",
"0x9d6dae5f357a75ac39e02637b63d9ffc112c4c6b7f1277aa3051c365ce495f84",
"0x1d0fd5de2d1d37815375a2f0e1860bef13d5b7c9f6e06c83bcff3b8eb459ed45",
"0x1e05dcdb5f935576e1fafac2378b9573b6f640263dab0b7f8321845c6baa9612"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
