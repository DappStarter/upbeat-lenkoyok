require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift renew noble sniff hunt slice suspect genius'; 
let testAccounts = [
"0x2511e8e98002b885c4f5f95daf2c40860130aa66682cd794a13548cfdfe168a8",
"0x55092864476f4d3481f09427d439a158c516e35f5cd88df6e10ad40b00dcb662",
"0xd78dfefcdd9bdb6a488e36bc74dd8670016af6bf73cf8ad930415ce5cbdbb20e",
"0x0cdb2c0d7293e127fdc5b68f14a4fcb7f1de0101d6033d978130385074bff00e",
"0xef1cdd7a22e27e902c870d6b27161cebbc9044442c7c6514f1ce58846c8dde3f",
"0x9ad17d64f132af3ee74eab37ff7d3b152e04149551a901ef1f96cccc3ff87163",
"0x8c51cfb6c2625329876fcbf7024d35f0b692a9209f4429c2b113d1e4cb365d98",
"0xd79511933012b64e50f22ceef58c5184c62a34597dcd8809610b3d8d5753a1ce",
"0x168fe203d461d96ce00ae08e93b6d1ce07cded832bc2de9b6d0e3d80b5cad760",
"0xde8dc251aa5b1e413691a25f24f7e6922458b463495832246ca3604b7777158d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
