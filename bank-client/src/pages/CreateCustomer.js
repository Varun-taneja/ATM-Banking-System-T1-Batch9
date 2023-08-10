import React from "react";
import Snavbar from '../components/Snavbar'
import "../Div.css"
import Nform from "../components/Nform";

function CreateCustomer(){
    return (
        <div className='rowC'>
            <Snavbar />
            <div className="formC"><Nform /></div>
        </div>
    )
}

export default CreateCustomer;