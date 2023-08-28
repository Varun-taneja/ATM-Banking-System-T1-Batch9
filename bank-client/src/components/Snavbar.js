import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "../Snavbar.css";

const Snavbar = () => {
  return (
    <div style={{ display: 'flex', overflow: 'auto', width:'29vw', overflow: 'scroll initial',position:"sticky"}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            BANK|U&ME
          </a>
        </CDBSidebarHeader>
        {/* <Route path='/create-customer-details' element={<CreateCustomer />} />
        <Route path='/edit-customer-details' element={<AddCustomerDetails />} />
        <Route path='/transaction-details' element={<TransactionDetails />} />
        <Route path='/customer-card-details' element={<CustomerCardDetails />} />
        <Route path='/balance' element={<BalanceCheck />} /> */}
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu className='content'>
            <NavLink exact to="/create-customer-details" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Create Customer</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/view-customer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View Customer</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/edit-customer-details" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Add Customer Details</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/cash-withdrawing" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Cash Withdrawal</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mini-statement" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Mini Statment</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/balance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="dollar-sign">Balance Check</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/pin-change" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Pin Change</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/customer-card-details" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card" iconType="solid">Customer Card Details</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/transaction-details" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Customer Transaction Details</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/transfer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="dollar-sign">Fund Transfer</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/cheque" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="dollar-sign">Cheque Deposit</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/currency-convert" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="dollar-sign">Currency Exchange</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/view-admins" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Admin Status</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle" onClick={()=>localStorage.removeItem("token")}>LOGOUT</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Admin Login
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Snavbar;