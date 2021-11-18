import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), '0x24187d858b7377774B666Ec0b1cb0c45D715276d'
);

export default instance;