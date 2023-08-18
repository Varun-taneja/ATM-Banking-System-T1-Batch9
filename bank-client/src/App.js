import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import CreateCustomer from './pages/CreateCustomer';
import ViewCustomer from './pages/ViewCustomer';
import TransactionDetails from './pages/TransactionDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerCardDetails from './pages/CustomerCardDetails';
import BalanceCheck from './pages/BalanceCheck';
import AddCustomerDetails from './pages/AddCustomerDetails';
import CashWithdrawing from './pages/CashWithdrawing';
import Login from './pages/Login';
import InvalidRoute from './components/InvalidRoute';
import FundTransfer from './pages/FundTransfer';
import ChequeDeposit from './pages/ChequeDeposit';
function App() {
  const [token, setToken] = useState();
  const [flag, setFlag] = useState();
  const [customerData, setCustomerData] = useState();

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    console.log("Token:", authToken)
    if (authToken != null) {
      setToken(authToken);
      console.log("state:", token)
      setFlag(true);
    }

  }, []);

  return (
    <React.Fragment>
  
        {token ?
      <BrowserRouter>

        <Routes>
            {/* <Route path='/' element={<Home />}></Route> */}
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/home' element={<Home />}></Route> */}
            {/* customer routes */}
            <Route path='/create-customer-details' element={<CreateCustomer token={token}/>} />
            <Route path='/edit-customer-details' element={<AddCustomerDetails customerData={customerData}/>} />
            <Route path='/transaction-details' element={<TransactionDetails />} />
            <Route path='/cash-withdrawing' element={<CashWithdrawing token={token}/>} />
            <Route path='/customer-card-details' element={<CustomerCardDetails />} />
            <Route path='/balance' element={<BalanceCheck token={token}/>} />
            <Route path='/view-customer' element={<ViewCustomer token={token} setCustomerData={setCustomerData}/>} />
<<<<<<< HEAD
            <Route path='/transfer' element={<FundTransfer />} />
            <Route path='/cheque' element={<ChequeDeposit token={token}/>} />
=======
            <Route path='/transfer' element={<FundTransfer token={token}/>} />
>>>>>>> 5c5cb0f0d2363eb03b1fc3a3815967d1b7a455c3
            {/* admin routes */}
            {/* <Route path='/register-admin' element={<Register />} /> */}
            {/* <Route path='/login-admin' element={<Login />} /> */}

            {/* Handling invalid routes */}
            <Route path='*' element={<InvalidRoute />} />
          </Routes>
      </BrowserRouter>

          :
          
          <Login setToken={setToken}/>

        }

    </React.Fragment>


    // <div className="App">
    //   <div className='gridContainer'>
    //   <Link to="create-customer-details">
    //     <button >Create Customer</button>
    //   </Link>
    //   <Link to="edit-customer-details">
    //     <button >Edit Customer</button>
    //   </Link>
    //   <Link to="transaction-details">
    //     <button >View Transactions</button>
    //   </Link>
    //   <Link to="customer-card-details">
    //     <button >View Card Details</button>
    //   </Link>
    //   <Link to="balance">
    //     <button >View Balance</button>
    //   </Link>
    //   </div>
    // </div>
  );
}

export default App;
