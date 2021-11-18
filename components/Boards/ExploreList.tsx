import { ReactElement } from "react";
import testCamps from "../../testCamp";
import ExploreCard from "../subcomponents/ExploreCard";

function ExploreList(props:any) : ReactElement {

    const createCard = (campaign:any, index:number) => {
        return (
            <ExploreCard 
            key = {index}
            name =  {campaign.name}
            img = {campaign.img}
            author = {campaign.author}
            numofsupporters = {campaign.numofSupporters}
            numofrequests = {campaign.numofRequests}
            daystodeadline = {campaign.daysToDeadline}
            description = {campaign.description}
            />
        );
    }

    return (
        <div className="explore-list">
            {props.campaigns.map((e:any, index:number)=>{
                return createCard(e,index);
            })}
        </div>
    )
}

export default ExploreList;