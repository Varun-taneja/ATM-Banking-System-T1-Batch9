import React, { useState, useEffect } from "react";
import Snavbar from "../components/Snavbar";
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from "axios";
import DenominationItem from "../components/Denomination";
import CashWithdrawal from "../components/CashWithdrawal";
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CashWithdrawing({ token, setCustomerData, isToggled, setIsToggled }) {


  // const balanceChange = value => {
  //     setBalance = prevState.money - total,
  // }


  const denominationsList = [
    {
      id: 1,
      value: 50,
    },
    {
      id: 2,
      value: 100,
    },
    {
      id: 3,
      value: 200,
    },
    {
      id: 4,
      value: 500,
    },
  ]
  const [name, setName] = useState();
  const [balance, setBalance] = useState();
  const [total, setTotal] = useState();
  // const [checkTotal, setCheckTotal] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [fiveHundred, setFiveHundred] = useState();
  const [twoHundred, setTwoHundred] = useState();
  const [hundred, setHundred] = useState();
  const [fifty, setFifty] = useState();



  const navigate = useNavigate();

  const getBalById = (event) => {
    event.preventDefault();
    console.log(token)
    axios
      .get("http://localhost:30140/api/Balance/GetBalance/" + searchValue, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        //(response.data);
        // setCustomerData(response.data)-
        console.log(searchValue);
        console.log(response.data);
        setName(response.data.accountNumber);
        setBalance(response.data.accountBalance);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });

    //event.preventDefault();
  };

  async function handleSubmit(e) {
    const checkTotal = 500 * parseInt(fiveHundred) + 200 * parseInt(twoHundred) + 100 * parseInt(hundred) + 50 * parseInt(fifty);
    // if(checkTotal> balance){
    //   toast.warn('Insufficient Balance!!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     })
        // return;
    // }

    const newBalance = balance - checkTotal
    e.preventDefault()

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //     return alert("Passwords do not match")
    // }
    const accountNo= name;

    const newTransaction = {
      fromAccountNumber: parseInt(accountNo),
      toAccountNumber: null,
      amount: parseInt(checkTotal)
    }
    try {
      console.log(checkTotal)
      console.log(newTransaction)
      const res = await axios.post('http://localhost:30140/api/Transaction/AddTransaction', 
    // alert(`INR ${checkTotal} will be withdrawn`)
      
      newTransaction, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      })
      console.log(res)
      setBalance(newBalance)


    } catch (err) {
      console.log(err);
      toast.error(err.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // setLoading(false)
  }
  return (
    <div className='rowC'>
      <ToastContainer />

      <Snavbar isToggled={isToggled} setIsToggled={setIsToggled}/>
      <div className='colnC'>
        <div className="rowC">
          <h1 className="titleC">Cash Withrawal</h1>
          <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getBalById} /></div>
        </div>
        <div className='padd'>
          {/* <CashWithdraw /> */}
          {/* <CashWithdrawal denominationsList={denominationsList} /> */}
          <div className="main-container">
            <div className="inner-container">
              <div className="heading-container">
                <div className="para-div">
                  <p className="s">A</p>
                </div>
                <p className="name-para">{name}</p>
              </div>
              <div className="money-container">
                <p className="balance-name">BALANCE</p>
                <div className="balance-holder">
                  <p className="amount">{balance}</p>
                </div>
              </div>
              <p className="rupees">In Rupees</p>
              <p className="withdraw">WITHDRAW</p>
              <p className="choose">CHOOSE SUM (IN RUPEES)</p>

              {/* <ul className="items-holder">
                            {denominationsList.map(eachObject => (
                            <DenominationItem
                                key={eachObject.id}
                                value={eachObject.value}
                                stateChange={this.stateChange}
                            />
                            ))}
                        </ul> */}

              <div className="formC" style={{ paddingTop: "1em" }}>
                <Form>
                  <Row className="mb-3" style={{color:"white"}}>
                    <Form.Group as={Col} controlId="formGridFifty" >
                      <Form.Label>50</Form.Label>
                      <Form.Control type="number" placeholder="Enter No." value={fifty} onChange={(e) => { setFifty(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridHundred">
                      <Form.Label>100</Form.Label>
                      <Form.Control type="number" placeholder="Enter No." value={hundred} onChange={(e) => { setHundred(e.target.value) }} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3" style={{color:"white"}}>
                    <Form.Group as={Col} controlId="formGridTwoHundred">
                      <Form.Label>200</Form.Label>
                      <Form.Control type="number" placeholder="Enter No." value={twoHundred} onChange={(e) => { setTwoHundred(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFiveHundred">
                      <Form.Label>500</Form.Label>
                      <Form.Control type="number" placeholder="Enter No." value={fiveHundred} onChange={(e) => { setFiveHundred(e.target.value) }} />
                    </Form.Group>
                    <button className="btn-cash" type="button" onClick={handleSubmit}>
                      Submit
                    </button>


                  </Row>


                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CashWithdrawing;