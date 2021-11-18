import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';
const compiledFactory = require('./build/CampaignFactory.json');

//Rinkeby.infura is an ethereum Node
const provider = new HDWalletProvider(
    '{NODE__ENV_PHRASE}',
    '{NODE__RINKEBY_ADDRESS}'
);

const web3 = new Web3(provider);
const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data: '0x' + compiledFactory.bytecode}).send({gas:'1000000', from: accounts[0], gasPrice: '5000000000'});
    console.log('Contrat deployed to ', result.options.address);
};

deploy();