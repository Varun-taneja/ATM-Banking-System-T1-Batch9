import React from 'react';
import Snavbar from '../components/Snavbar'
import "../Div.css"
import Nform from '../components/Nform';
import Searchbar from '../components/Searchbar';

function AddCustomerDetails() {
    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <div className='searchC'><Searchbar/></div>
                <div className="formC"><Nform /></div>
            </div>
            {/* <h1>Add/Edit Customer Details</h1> */}
        </div>
    )
}

export default AddCustomerDetails;