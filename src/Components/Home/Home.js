import React, { useState } from 'react'
import Header from '../Header/Header'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiCircleMinus ,CiCirclePlus} from "react-icons/ci";
import Discover from '../Discover/Discover';
import Services from '../Services/Services';
import Address from '../Address/Addess'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const [roomNum,setRoomNum] = useState(0)
  const [checkinDate,setCheckinDate] = useState('')
  const [checkoutDate,setCheckoutDate] = useState('')

  const onClickCheckinDate = (event) => {
    setCheckinDate(event.target.value)
  }

  const onClickCheckOutDate = (event) => {
    setCheckoutDate(event.target.value)
  }

  const onDecress = () => {
    setRoomNum((prevCount) => roomNum - 1)
  }

  const onIncress = () => {
    setRoomNum((prevCount) => roomNum + 1)
  }

  const dataToPass = { roomCount: roomNum, checkinDate : checkinDate, checkoutDate : checkoutDate}

  const onConformBooking = () => {
    navigate(`/book`,{state :dataToPass})
  }



  return (
    <>
    <Header/>
    <div id="home">
    <div className="home">
      <div className="home-left">
        <h1 className="hom-text">Work From <br/> Ladakh</h1>
        <p className="home-description">Inida's first true digital tourism ecosystem.</p>
        <FaFacebook  className="facebook-icon"/>
        <AiFillInstagram className="instagram-icon" />
      </div>
      <div className="home-right">
        <img src="https://i.pinimg.com/564x/43/1f/04/431f049a588e4be7482f86923969e0c1.jpg" className="home-image" alt=""/>
      </div>
      </div>
      <div className="bottom-box">
        <div className="check-in-box">
        <h3 className="chech-in">
          CHECK-IN
        </h3>
        <input type='date' className="date-input" onChange={onClickCheckinDate} value={checkinDate} />
        </div>
        <hr/>
        <div className="check-in-box">
        <h3 className="chech-in">
          CHECK-OUT
        </h3>
        <input type='date' className="date-input" onChange={onClickCheckOutDate} value={checkoutDate} />
        </div>
        <hr/>
        <div>
        <h3 className="chech-in">
          ROOMS
        </h3>
        <div className="check-in-rooms">
        <CiCircleMinus className="icon" onClick={onDecress} />
        <p className="number-of-rooms">{roomNum}</p>
        <CiCirclePlus className="icon" onClick={onIncress} />
        </div>
        </div>
        <button className="book-button" onClick={onConformBooking}>BOOK</button>

      </div>
    </div>
    <Discover/>
    <Services/>
    <Address/>
    
    </>
  )
}

export default Home