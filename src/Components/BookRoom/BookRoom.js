import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header'
import { CiCircleMinus ,CiCirclePlus} from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import Address from '../Address/Addess'
import './BookRoom.css'
import { useNavigate } from 'react-router-dom';


const BookRoom = () => {
    const location = useLocation();
    const { roomCount, checkinDate, checkoutDate } = location.state
    const [userName,setUserName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email,setEmail] = useState('')
    const [childerns,setChilderns] = useState('')
    const [adult,setAdult] = useState('')

  let rooms = roomCount * 12430
  let finalAmount = rooms

  const conformNavigate = useNavigate()

  const conformDataPass = { 
    roomCount: roomCount, checkinDate : checkinDate, checkoutDate : checkoutDate, finalAmount : finalAmount,
    contactNum : phoneNumber, name : userName, email :email, childerns : childerns, adult : adult
}

  const onConformAmount = () => {
    conformNavigate(`/order`,{state :conformDataPass})
  }

  const onEnterUserName = (event) => {
    setUserName(event.target.value)
  }

  const onEnterUserMail = (event) => {
    setEmail(event.target.value)
  }

  const onEnterUserPhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }

  const onEnterNumberofAdult = (event) => {
    setAdult(event.target.value)
  }

  const onEnterNumberofChildren = (event) => {
    setChilderns(event.target.value)
  }

  return (
    <>
    <div className="booking-room">
        <Header/>

        <div className="room">
            <div className="name-and-mail">
                <input type="text" className='user-input' placeholder='Your Name' onChange={onEnterUserName} value={userName} />
                <input type="email" className='user-input' placeholder='Your E-Mail' onChange={onEnterUserMail} value={email} />
            </div>
            <div className="user-contact-details">
                <input type="number"  placeholder='Enter Your Number' className='user-input' onChange={onEnterUserPhoneNumber} value={phoneNumber} />
                <input type="text"  placeholder='Number Of Adults' className='adults' onChange={onEnterNumberofAdult} value={adult} />
                <input type="text"  placeholder='Number Of Childerns' className='adults' onChange={onEnterNumberofChildren} value={childerns} />
            </div>
        </div>
        <div className="bottem-box-items">
            <div className="check-in-data">
                <p className="check-in">
                    CHECK-IN
                </p>
                <input type="date" className="date-input" value={checkinDate}/>
            </div>
            <hr/>
            <div className="check-in-data">
                <p className="check-in">
                    CHECK-OUT
                </p>
                <input type="date" className="date-input" value={checkoutDate}/>
            </div>
            <hr/>
            <div className="check-in-data-rooms">
                <p className="check-in">
                    ROOMS
                </p>
                <div className="check-in-date-room">
                <CiCircleMinus className="icon-minus"/>
                <p className="room-count">{roomCount}</p>
                <CiCirclePlus className='icon-minus'/>
                </div>
            </div>
          <div className="button-text">
             <div className="button-and-arrow">
             <button className="amount-button" onClick={onConformAmount}>₹ {finalAmount }</button>
             <FaArrowRight className="rignt-wrrow" />
             </div>
              <p className="pay-text">Click to pay token amount</p>
        </div>
        </div>
        <div className="address-container">
        <Address/>
     </div>
    </div>
     
    </>
  )
}

export default BookRoom
