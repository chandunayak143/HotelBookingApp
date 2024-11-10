import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './OrderComplete.css'
import Address from '../Address/Addess'

const OrderComplete = () => {
  const location = useLocation();
    const { roomCount, checkinDate, checkoutDate ,finalAmount, contactNum, name, email, childerns, adult} = location.state;

  return (
    <>
    <Header/>
   
    <div className="conform-order">
      <div className="conformOrder-card">
        <div className="conform-order-left">
          <h1 className="user-name-text">{name}</h1>
          <p className="user-details">{contactNum}</p>
          <p className="user-details">{email}</p>
          <p className="user-details">{adult}Adult and {childerns} Childerns</p>
        </div>
        <div className="conform-order-right">
          <img src="https://i.pinimg.com/564x/cc/da/fa/ccdafa61f026b816dfbb0a6e3ba15390.jpg" 
          className="order-success-image" alt="order success image"/>
          <div>
          <h3 className="order-success-heading">Order Complete</h3>
          <p className="order-success-description">have any questions <br/><a href="#" className="anchor-text">contact us</a></p>
          </div>
        </div>
      </div>
      <div className="bottom-card-details">
        <div className="check-in-data">
          <p className="check-in-head">CHECK-IN</p>
          <input type='date' value={checkinDate}/>
        </div>
        <hr/>
        <div className="check-in-data">
          <p className="check-in-head">CHECK-IN</p>
          <input type='date' value={checkoutDate}/>
        </div>
        <hr/>
        <div className="check-in-data">
          <p className="check-in-head">ROOMS</p>
          <p className="toal-rooms">{roomCount}</p>
        </div>
        <div className="amount-btn-text">
          <button className="amount-btn">₹ {finalAmount}</button>
        </div>
      </div>
      <div className="address-container">
        <Address/>
     </div>
    </div>
    </>
  )
}

export default OrderComplete