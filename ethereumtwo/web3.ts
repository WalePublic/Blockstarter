import Web3 from "web3";

let web3;

//Check if in and metamask is installed and gives access
//TODO
//@ts-ignore
let ethObj = window.ethereum;
if(typeof window !== "undefined" && typeof ethObj !== "undefined") {
    ethObj.request({method: "eth_requestAccounts"});
    web3 = new Web3(ethObj);
} else {
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/5e5b37aa6e614111aafd5962b7ae24ce');
    web3 = new Web3(provider);
}

export default web3;