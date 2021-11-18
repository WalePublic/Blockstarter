import { useRouter } from "next/router";
import { FormEvent, ReactElement, useState } from "react";
import HFLayout from "../components/HFLayout";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";

enum CREATEFORMFIELDS {
    AUTHOR = "author",
    NAME = "name",
    MINIMUMCONTRIBUTION = "minimumContribution",
}


function CreateCampaign(): ReactElement {

    const [state, setState] = useState({
                                        author: "",
                                        name: "",
                                        minimumContribution: "",
                                        errorMessage: false,
                                        busy: false
    });

    const Router = useRouter();

    const updateField= (name:string, value:any) =>{
        const nameStr = name as unknown as CREATEFORMFIELDS;
        
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

        updateField('busy', true);

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods.creatCampaign(state.minimumContribution).send({
                from: accounts[0]
            });

            Router.push('/');

        } catch(err:any){
            updateField(err.message, true);
        }

        updateField('busy', false);
    }
    
    return (
        <div>
            <HFLayout>
                <section className="section-create">
                    <div className="create-campaign">
                        <div className="create-board">
                            <form action="#" className="create-form">
                                <div>
                                    <div className="util-margin-bottom-medium">
                                        <h2 className="heading-secondary">Create</h2>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Author" id="name" required></input>
                                        <label htmlFor="name" className="form__label">Author</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Project Name" id="projName" required></input>
                                        <label htmlFor="projName" className="form__label">Project Name</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="date" className="form__input" placeholder="mm/dd/yy" id="deadline" required></input>
                                        <label htmlFor="deadline" className="form__label">Deadline</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="number" className="form__input" placeholder="Minimum" id="minimum" required></input>
                                        <label htmlFor="minimum" className="form__label">Minimum Contribution (Wei)</label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Description" id="description" required></input>
                                    <label htmlFor="description" className="form__label">Description</label>
                                </div>
                                <div className="form__group">
                                    <button className="btn btn--primary util-margin-top-big">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </HFLayout>
        </div>
    );
}

export default CreateCampaign;