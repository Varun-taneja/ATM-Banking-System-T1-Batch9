import React from 'react';
import Snavbar from '../components/Snavbar';
import "../Div.css"
import SearchBar from '../components/Searchbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ViewCustomer({ token, setCustomerData,isToggled, setIsToggled }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [custId, setCustId] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [flag,setFlag]= useState(false);
  const [customerList, setCustomerList] = useState()

  const navigate = useNavigate();

  useEffect(()=>{
    axios
    .get("http://localhost:30140/api/Customer/GetAllCustomers/", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      //(response.data);
      setCustomerList([...response.data]);
      setFlag(true);
      console.log(searchValue);
      console.log(response.data);
      

    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data, {
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
  },[])

  const getCustById = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:30140/api/Customer/GetCustomer/" + searchValue, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        //(response.data);
        setCustomerList([{...response.data, customerId: response.data.customerID}])
        setCustomerData(response.data);
        setFlag(true);
        console.log(searchValue);
        console.log(response.data);
      

      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, {
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

  const delCustById = (event) => {
    event.preventDefault();
    axios
      .delete("http://localhost:30140/api/Customer/DeleteCustomer/" + event.target.id, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        //(response.data);
        toast.success(`Customer has been deleted!!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

        setCustomerList((customerList)=>customerList.filter((d)=>{
          return d.customerId !=event.target.id;
        }));
        // setCustomerData(response.data);
        setFlag(false);
        console.log(searchValue);
        console.log(response.data);
        setSearchValue("")
      })
      .catch((error) => {
        console.log(error.response.data);
        toast.error(error.response.data, {
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

  const editCustomer = (event) => {
    console.log(event.target.id)
    console.log(customerList.filter((d)=> (d.customerId == event.target.id)))
    setCustomerData(customerList.filter(d=> d.customerId == event.target.id)[0])
    navigate('/edit-customer-details')
  }

  return (
    <div className='rowC'>
      <Snavbar isToggled={isToggled} setIsToggled={setIsToggled}/>
      <ToastContainer />
      <div className='colnC'>
        <div className='rowC'>
          <h1 className='titleC'>View Customer Details</h1>
          <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getCustById} /></div>
        </div>
        
        {/* <button onClick={getCustById} style={{ margin: "10px" }}>
                  Search
                </button> */}
        <div style={{marginRight:"0.2em",display: flag?'block':'none', maxWidth:"50%"}}>
          <MDBTable bordered>
            <MDBTableHead>
              <tr className='table-dark'>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Account Number</th>
                <th scope="col">Address</th>
                <th scope="col">Pincode</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {customerList?customerList.map((d)=>{
                return (
                  <tr>
                  <td scope='row'>{d.customerName}</td>
                  <td>{d.email}</td>
                  <td>{d.contact}</td>
                  <td>{d.customerId}</td>
                  <td>{d.accountNumber}</td>
                  <td>{d.address}</td>
                  <td>{d.pincode}</td>
                  <td><Button onClick={editCustomer} id={d.customerId}>Edit</Button></td>
                  <td><Button onClick={delCustById} id={d.customerId} variant="danger">Delete</Button></td>
                  </tr>
                )
              }):""}
            
            
            </MDBTableBody>
          </MDBTable>
        </div>
      

      </div>

    </div>
  )
}

export default ViewCustomer;
