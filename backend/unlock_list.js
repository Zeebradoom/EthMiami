const { ethers } = require("ethers");
const abi = require('./unlock_abi.json');
require('dotenv').config();
const { randomBytes } = require('crypto');
// const { WalletService } = require("@unlock-protocol/unlock-js");
const abis = require("@unlock-protocol/contracts");

const UnlockContractAddress = "0x627118a4fB747016911e5cDA82e2E77C531e8206"; // Goerli 
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const provider = new ethers.JsonRpcProvider("https://rpc.unlock-protocol.com/5");

module.export.listProject = async function listProject() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    console.log("Your account is retrieved! Address is %s. \n", wallet.address);
    signer = wallet.connect(provider); 
  
    const Contract = new ethers.Contract(UnlockContractAddress, abi, signer);
    const name = await Contract.getAdmin();
    console.log("Admin is:", name);

    const buf = randomBytes(12);
    const createLock = await Contract.createLock(30, "0x07865c6e87b9f70255377e024ace6630c1eaa37f", 10, 1000, 'test 1', buf);
    console.log("Lock creation:", createLock);
    const lockAddress = createLock.hash

    return lockAddress; 
}
