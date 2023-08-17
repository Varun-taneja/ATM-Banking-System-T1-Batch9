import React, { useState } from "react";
import Snavbar from '../components/Snavbar'
import "../Div.css"
import SearchBar from "../components/Searchbar";
// import CardDisplay from "../components/CardDisplay";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import '../Card.css'
import axios from "axios";

function CustomerCardDetails(){
    const [cardno, setCardNumber] = useState();
    const [name, setName] = useState("");
    const [accountNumber, setAccountNumber] = useState()

    async function handleSearch(e) {
        // const data = {
        //     name,
        //     cardNum:parseInt(cardno)
        // }
        e.preventDefault()

        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return alert("Passwords do not match")
        // }

        try {
            const response = await axios.get("" + accountNumber);
            console.log(response);
            
        }
        catch (error) {
            console.log(error);
        }

        // setLoading(false)
    }



    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <div className="rowC">
                    <h1 className="titleC">Customer Card Details</h1>
                    <div className='searchC'><SearchBar/></div>
                </div>
                <div classname="padd">
                    <MDBContainer fluid className="py-5 gradient-custom">
                        <MDBRow className="d-flex justify-content-center py-5">
                            <MDBCol md="7" lg="5" xl="4">
                            <MDBCard style={{ borderRadius: "15px" }}>
                                <MDBCardBody className="p-4">
                                <MDBRow className="d-flex align-items-center">
                                    <MDBCol size="9">
                                    <MDBInput
                                        label="Card Number"
                                        id="form1"
                                        type="text"
                                        placeholder={cardno}
                                    />
                                    </MDBCol>
                                    <MDBCol size="3">
                                    <img
                                        src="https://img.icons8.com/color/48/000000/visa.png"
                                        alt="visa"
                                        width="64px"
                                    />
                                    </MDBCol>

                                    <MDBCol size="9">
                                    <MDBInput
                                        label="Cardholder's Name"
                                        id="form2"
                                        type="text"
                                        placeholder={name}
                                    />
                                    </MDBCol>

                                    <MDBCol size="6">
                                    <MDBInput
                                        label="Expiration"
                                        id="form2"
                                        type="text"
                                        placeholder="**/****"
                                    />
                                    </MDBCol>
                                    <MDBCol size="3">
                                    <MDBInput
                                        label="CVV"
                                        id="form2"
                                        type="text"
                                        placeholder="&#9679;&#9679;&#9679;"
                                    />
                                    </MDBCol>
                                    <MDBCol size="3">
                                    {/* <MDBBtn color="info" rounded size="lg">
                                        <MDBIcon fas icon="arrow-right" />
                                    </MDBBtn> */}
                                    </MDBCol>
                                </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                {/* <h1 className="padd">Customer Card Details</h1> */}
            </div>
            
        </div>
    )
}

export default CustomerCardDetails;