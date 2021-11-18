import { ReactElement } from "react";
import BSFooter from "./BSFooter";
import BSHeader from "./BSHeader";



const HFLayout = (props:any) : ReactElement=> {
    return(
        <div className="container">
            <BSHeader />
            {props.children}
            <BSFooter />
        </div>
    )
}
  export default HFLayout;