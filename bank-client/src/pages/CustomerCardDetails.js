import React from "react";
import Snavbar from '../components/Snavbar'
import "../Div.css"
import SearchBar from "../components/Searchbar";
import CardDisplay from "../components/CardDisplay";

function CustomerCardDetails(){
    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <div className='searchC'><SearchBar/></div>
                <div classname="padd"><CardDisplay/></div>
                {/* <h1 className="padd">Customer Card Details</h1> */}
            </div>
            
        </div>
    )
}

export default CustomerCardDetails;