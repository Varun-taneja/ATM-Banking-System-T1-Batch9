import React from 'react';
import Snavbar from '../components/Snavbar';
import "../Div.css"
import SearchBar from '../components/Searchbar';

function ViewCustomer() {
    return (
        <div className='rowC'>
        <Snavbar />
        <div className='colnC'>
                <div className='searchC'><SearchBar/></div>
                <h1 className='padd'>View Customer Details</h1>
            </div>
        
    </div>
    )
}

export default ViewCustomer;