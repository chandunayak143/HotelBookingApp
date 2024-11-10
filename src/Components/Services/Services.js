import React from 'react'
import { FaWifi } from "react-icons/fa";
import { IoCart ,IoBicycle,IoFastFoodOutline} from "react-icons/io5";
import { FaCar,FaFlag } from "react-icons/fa6";
import { MdCardTravel,MdHome } from "react-icons/md";


import './Services.css'

const Services = () => {
  return (
    <div className="service">
        <h1 className="services-heaading">Services</h1>
    <div className="service-container">
        <div className="service-card">
        <FaWifi  className="service-icon"/>
        <h3 className="service-name">High Speed Internet</h3>
        <p className="service-description">Optical fiber connections provided in
           not only in your cabins but rather to
            all of the BriSphere scenic working
            spaces and dinning areas.</p>
        </div>
        <div className="service-card">
        <IoFastFoodOutline  className="service-icon"/>
        <h3 className="service-name">Healthy Meals</h3>
        <p className="service-description">A healthy breakfast and pleasant
dinner will be serviced at your space
every single day for your entire
duration of stay with option of paid
order within BriSphere.</p>
        </div>
        <div className="service-card">
        <MdHome  className="service-icon"/>
        <h3 className="service-name">Homely Stay</h3>
        <p className="service-description">Designed for working professionals
with spacious interiors, comfortable
beds and sleekly attached kitchen
are some of the comforts providedin
your space.</p>
        </div>
        <div className="service-card">
        <FaCar  className="service-icon"/>
        <h3 className="service-name">Transportation</h3>
        <p className="service-description">Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
        </div>
        <div className="service-card">
        <IoBicycle className="service-icon"/>
        <h3 className="service-name">Food Delivery</h3>
        <p className="service-description">Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
        </div>
        <div className="service-card">
        < MdCardTravel  className="service-icon"/>
        <h3 className="service-name">Tourism</h3>
        <p className="service-description">Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
        </div>
        <div className="service-card">
        <FaFlag  className="service-icon"/>
        <h3 className="service-name">Job</h3>
        <p className="service-description">Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
        </div>
        <div className="service-card">
        <FaCar  className="service-icon"/>
        <h3 className="service-name">Rental Service</h3>
        <p className="service-description">Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
        </div>
        <div className="service-card">
        <IoCart   className="service-icon"/>
        <h3 className="service-name">Online Shop</h3>
        <p className="service-description">Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
        </div>
    </div>
    </div>
  )
}

export default Services