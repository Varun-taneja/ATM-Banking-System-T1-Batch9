import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import CreateCustomer from './pages/CreateCustomer';
import TransactionDetails from './pages/TransactionDetails';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CustomerCardDetails from './pages/CustomerCardDetails';
import BalanceCheck from './pages/BalanceCheck';
import AddCustomerDetails from './pages/AddCustomerDetails';
import Register from './pages/Register';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/home' element={<Home />}></Route>
        {/* customer routes */}
        <Route path='/create-customer-details' element={<CreateCustomer />} />
        <Route path='/edit-customer-details' element={<AddCustomerDetails />} />
        <Route path='/transaction-details' element={<TransactionDetails />} />
        <Route path='/customer-card-details' element={<CustomerCardDetails />} />
        <Route path='/balance' element={<BalanceCheck />} />
        {/* admin routes */}
        <Route path='/register-admin' element={<Register />} />
        <Route path='/login-admin' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
