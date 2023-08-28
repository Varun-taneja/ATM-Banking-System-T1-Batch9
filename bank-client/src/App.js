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
import PinChange from './pages/PinChange';
import MiniStatement from './pages/MiniStatement';
import CurrencyConversion from './pages/CurrencyConversion';
import ViewAdmins from './pages/ViewAdmins';
import LandingPage from './pages/LandingPage';
import ViewCheques from './pages/ViewCheques';
function App() {
  const [token, setToken] = useState();
  const [flag, setFlag] = useState();
  const [customerData, setCustomerData] = useState();
  const [isToggled, setIsToggled] = useState(false)


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
            <Route path='/' element={<Home isToggled={isToggled} setIsToggled={setIsToggled}/>}></Route>
            {/* <Route path='/home' element={<Home />}></Route> */}
            {/* customer routes */}
            {/* <Route path='/landing' element={<LandingPage />} /> */}
            <Route path='/create-customer-details' element={<CreateCustomer token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/edit-customer-details' element={<AddCustomerDetails token={token} customerData={customerData} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/view-cheques' element={<ViewCheques token ={token} customerData={customerData} isToggled={isToggled} setIsToggled={setIsToggled}/>} />

            <Route path='/transaction-details' element={<TransactionDetails token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/cash-withdrawing' element={<CashWithdrawing token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/customer-card-details' element={<CustomerCardDetails />} />
            <Route path='/pin-change' element={<PinChange token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/balance' element={<BalanceCheck token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/mini-statement' element={<MiniStatement token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/view-admins' element={<ViewAdmins token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/view-customer' element={<ViewCustomer token={token} setCustomerData={setCustomerData} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/transfer' element={<FundTransfer token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/cheque' element={<ChequeDeposit token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            <Route path='/currency-convert' element={<CurrencyConversion token={token} isToggled={isToggled} setIsToggled={setIsToggled}/>} />
            {/* admin routes */}
            {/* <Route path='/register-admin' element={<Register />} /> */}
            {/* <Route path='/login-admin' element={<Login />} /> */}

            {/* Handling invalid routes */}
            <Route path='*' element={<InvalidRoute />} />
          </Routes>
      </BrowserRouter>

          :
          <BrowserRouter>

        <Routes>
            {/* <Route path='/' element={<Home />}></Route> */}
            <Route path='/sign-up' element={<Login token={token} setToken={setToken}/>}></Route>
            {/* <Route path='/home' element={<Home />}></Route> */}
            {/* customer routes */}
            <Route path='/' element={<LandingPage />} />
            
            
            {/* admin routes */}
            {/* <Route path='/register-admin' element={<Register />} /> */}
            {/* <Route path='/login-admin' element={<Login />} /> */}

            {/* Handling invalid routes */}
            <Route path='*' element={<InvalidRoute />} />
          </Routes>
      </BrowserRouter>
          // <Login setToken={setToken}/>

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
