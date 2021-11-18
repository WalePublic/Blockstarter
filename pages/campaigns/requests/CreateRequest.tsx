import { useRouter } from "next/router";
import { FormEvent, ReactElement, useState } from "react";
import HFLayout from "../../../components/HFLayout";
import web3 from "../../../ethereumtwo/web3";
import Campaign from '../../../ethereum/campaign'

enum CREATEREQUESTFORMFIELDS {
    VALUE = "value",
    DESCRIPTION = "description",
    RECIPIENT = "recipient",
}

function CreateRequest({props}:any) : ReactElement {

    const [state, setState] = useState({
        value: '',
        description:'',
        recipient:'',
        busy: false,
        errorMessage:''
    });

    const Router = useRouter();

    const updateField= (name:string, value:any) =>{
        const nameStr = name as unknown as CREATEREQUESTFORMFIELDS;
        
        setState((prevValue)=> {
            let pObj = {...prevValue};
            pObj[nameStr] = value as unknown as any;
            return pObj;
        });
    }

    const updateInput = (event:FormEvent)=> {
        const {name, value} = event.target as unknown as HTMLInputElement;
        updateField(name, value);
    }

    const submit = async (event:FormEvent) => {
        event.preventDefault();
        
        const campaign = Campaign(props.address);
        const {description, value, recipient} = state;

        try{
            updateField('busy', true);
            
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                recipient,
                web3.utils.toWei(value, 'ether'),
                description).send({from: accounts[0]});

            updateField('busy', false);
            Router.push('/');

        } catch(err:any){
            updateField('errorMessage', err.message);
        }
    }

    return (
        <div>
            <HFLayout>
                <div><a href={`/campaigns/${props.address}/requests`}>Back</a></div>
                <h3>Create a Request</h3>
                <form onSubmit={submit}>
                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Description" id="description" required></input>
                        <label htmlFor="description" className="form__label">Description</label>
                    </div>
                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Value" id="value" required></input>
                        <label htmlFor="value" className="form__label">Value</label>
                    </div>
                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Recipient's Address" id="rAddress" required></input>
                        <label htmlFor="rAddress" className="form__label">Recipient's Address</label>
                    </div>
                    <button className="btn btn--primary">Create Request</button>
                </form>
            </HFLayout>
        </div>
    );
}

CreateRequest.getInitialProps = async (props:any) => {
    const {address} = props.query;

    return {address};
}

export default CreateRequest;