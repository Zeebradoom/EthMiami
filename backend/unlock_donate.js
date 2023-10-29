const { ethers } = require("ethers");
const abi = require('./unlock_abi.json');
require('dotenv').config();
const { randomBytes } = require('crypto');
// const { WalletService } = require("@unlock-protocol/unlock-js"); // does not work
const abis = require("@unlock-protocol/contracts");

const UnlockContractAddress = "0x627118a4fB747016911e5cDA82e2E77C531e8206"; // Goerli 
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const provider = new ethers.getDefaultProvider("https://rpc.unlock-protocol.com/5");

// const { goerli } = require('@unlock-protocol/networks');

async function donate() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    console.log("Your account is retrieved! Address is %s. \n", wallet.address);
    signer = wallet.connect(provider); 
  
    const Contract = new ethers.Contract(UnlockContractAddress, abi, signer);
    const name = await Contract.getAdmin();
    console.log("Admin is:", name);

    // const buf = randomBytes(12);
    // const createLock = await Contract.createLock(30, "0x07865c6e87b9f70255377e024ace6630c1eaa37f", 10, 1000, 'test 1', buf);
    // console.log("Lock creation:", createLock);
    // lockAddress = createLock.hash

    const address = "0x8a1274337fe7e10b7011ed11e4b8291561e836f1";
    const lock = new ethers.Contract(address, abis.PublicLockV12.abi, provider);
    console.log(await lock.symbol()); // => "KEY"
    console.log(await lock.name()); // => "Unlock Times"

    const amount = await lock.keyPrice();

    // Purchase params:
    // The purchase function in v11 supports making multiple purchases... here we just pass a single one.
    const purchaseParams = [
        [amount],
        [wallet.address], // This is the recipient of the membership (us!)
        [wallet.address], // The is the referrer who will earn UDT tokens (we'd like this to be us!)
        [ZERO_ADDRESS], // The key manager. if 0x0, then it is the recipient by default
        [[]], // empty data object (not used here)
    ];

    const options = {
        value: amount, // This is a lock that uses Ether, so it means we need send value. If it was an ERC20 we could set this to 0 and just use the amount on purchase's first argument
    };

    // We can now send transactions to modify the state of the lock, like purchase a key!
    const transaction = await lock.purchase(...purchaseParams, options);
    console.log(transaction.hash);
    const receipt = await transaction.wait();
    console.log(receipt);
}

donate();