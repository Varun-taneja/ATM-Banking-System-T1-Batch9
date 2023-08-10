import React from "react";
import Snavbar from '../components/Snavbar'
import "../Div.css"
import SearchBar from "../components/Searchbar";


function TransactionDetails(){
    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <div className='searchC'><SearchBar/></div>
                <h1 className="padd">Customer Transaction Details</h1>
            </div>
        </div>
    )
}

export default TransactionDetails;