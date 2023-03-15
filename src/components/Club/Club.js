import React from 'react'
import './club.css'
import cuk from '../../images/logo1.jpg';
import Galery  from './Galery';
import { SliderImg } from './SliderImg';
import Navbar from '../Navbar/Navbar';
 
export const Club = () => {
  return (
    <div className='club'>
        <Navbar />
        <div className='club_cuk'>
            <img src={cuk} alt='cuk' />
            <h1>Citroen Club Čuk</h1>
        </div>
        <div className='club_galery'>
            <p>Club Čuk was founded in 2014. From the friendship of a couple of friends and the same love for Citroen old-timers, the club was born, and it was named in memory of the greatest lover of old vehicles who drove a Citroen 2cv6 all his life and who is no longer with us.</p>
            <br />
            <p>We have organized 2 gatherings so far, one was in Nis and the other in Niska Banja. You can view the gallery from our events.</p>
            <Galery slides={SliderImg} className='club_galery-galery'/>
        </div>
    </div>
  )
}