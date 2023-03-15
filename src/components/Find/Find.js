import React from 'react'
import './find.css';
import Navbar from '../Navbar/Navbar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import logo from '../../img/find-us.jpg';

const Find = () => {
    const position = [43.302287367344974, 22.00238049801134]
  return (
    <div className='find'>
        <Navbar />
        <h1>FIND US</h1>
        <div  className='find-us'>
            <div className='left'>
                <img src={logo} alt='img' />
                <p>Niska Banja</p>
                <p>Milana Obrenovica 18</p>
                <p>0631537120</p>
            </div>
            <div className='right'>
            <MapContainer center={position} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>I am here, come over for a cup of coffee :)</Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
    </div>
  )
}

export default Find