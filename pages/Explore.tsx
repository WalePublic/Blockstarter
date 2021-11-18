import { createFactory, ReactElement } from "react";
import ExploreList from "../components/Boards/ExploreList";
import Campaign from './../ethereum/campaign';
import factory from '../ethereum/factory';
import HFLayout from "../components/HFLayout";
import web3 from "../ethereumtwo/web3";


function Explore({campaigns}:any): ReactElement {

    console.log('I\'m in Explore Component');

    return(
        <div>
            <HFLayout>
                <section className="section-explore-list">
                    <ExploreList campaigns = {campaigns} />
                </section>
            </HFLayout>
        </div>
    )
}

Explore.getInitialProps = async(ctx:any) => {
    const camps = await factory.methods.getDeployedCampaigns().call();
    let props;

    if(camps){
        props = await Promise.all(camps.map(async (e:any, i:number)=>{
            const campaign = Campaign(e);
            const summary = await campaign.methods.getSummary().call();

            return {
                address: e,
                minimumContribution: summary[0],
                balance: summary[1],
                numofRequests: summary[2],
                numofSupporters: summary[3],
                managerAddress: summary[4],
                name: "The Rupert Project",
                img: "/drone1.jpg",
                author: "Ola Sol",
                daysToDeadline: `${123} days`,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum odit similique ducimus dolorem voluptatem, eos modi inventore! Repudiandae molestiae architecto beatae excepturi amet ex tenetur quo voluptas modi laborum!"
            };
        }));
    }

    console.log(`I'm in get initial props of Explore`);
    return {campaigns:props}
}

export default Explore;