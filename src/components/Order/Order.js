import React from 'react'
import './order.css';
import Navbar from '../Navbar/Navbar';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import dyane from '../../img/img1.png';
import cv from '../../img/img2.png';
import ds from '../../img/img7.png';
import ami from '../../img/img4.png';

const Order = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_yijkpgi', 'template_ugf4fne', form.current, 'mqUne9AHpdwrWsDaa')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                 },
                  () => {
                    alert('Failed to send the message, please try again')
            });
        };



  return (
    <div className='order'>
        <Navbar />
        <h1>Order Now</h1>
        <div className='order-section'>
            <div className='order-left'>
                <div className='one'>
                    <img src={dyane} alt='img' />
                    <img src={cv} alt='img' />
                </div>
                <div className='two'>
                    <img src={ds} alt='img' />
                    <img src={ami} alt='img' />
                </div>
            </div>
            <div className='order-right'>
                <h2>Feel free to ask us any questions, or to order one of oldtimers for you.</h2>
                <form ref={form} onSubmit={sendEmail}> 
                        <ul>
                        <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                    />
                    </li>
                    <li>
                    <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                    />
                    </li>
                    <li>
                    <textarea
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                    </li>
                    <li>
                    <input type="submit" className="flat-button" value="SEND" />
                    </li>
                        </ul>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Order