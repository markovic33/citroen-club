import React from 'react'
import './oldtimers.css';
import Navbar from '../Navbar/Navbar';
import YouTube from 'react-youtube';
import dyane from '../../img/img1.png';
import spacek from '../../img/img2.png';
import ds from '../../img/img6.png';
import ami from '../../img/img4.png';
import sm from '../../img/sm.png';
import avant from '../../img/avant.png';

const Oldtimers = () => {
  return (
    <div className='old'>
        <Navbar />
        <h1>Oldtimers</h1>
        <div className='firsth-row'>
            <div className='dyane'>

                <div className='dyane_title'>
                    <h2>Dyane 6</h2>
                </div>
                <div className='dyane_text'>
                <img src={dyane} alt='dyaneimg' />
                <p>The Citroën Dyane is an economy family car produced by the French automaker Citroën from 1967 to 1983.Nearly 1.45 million Dyanes and some 250,000 Acadianes were made, for a total of ~1.7 million units. </p>
                </div>
        
            </div>
            <div className='dyane'>
                
                <div className='dyane_title'>
                    <h2>2CV6</h2>
                </div>
                <div className='dyane_text'>
                    <img src={spacek} alt='spacekimg' />
                    <p>The Citroën 2CV is an air-cooled front-engine, front-wheel-drive, economy family car, introduced at the 1948 Paris Mondial de l'Automobile, and manufactured by Citroën for model years 1948–1990.Between 1948 and 1990, more than 3.8 million 2CVs were produced. </p>
                </div>
        
            </div>
            <div className='dyane'>
                
                <div className='dyane_title'>
                    <h2>DS</h2>
                </div>
                <div className='dyane_text'>
                <img src={ds} alt='dsimg' />
                <p>The Citroën DS  is a front mid-engined, front-wheel drive executive car manufactured and marketed by Citroën from 1955 to 1975, in fastback/sedan, wagon/estate, and convertible body configurations, across three series of one generation. </p>
                </div>
        
            </div>
        </div>
        <div className='second-row'>
            <div className='dyane'>
                    
                    <div className='dyane_title'>
                        <h2>AMI</h2>
                    </div>
                    <div className='dyane_text'>
                    <img src={ami} alt='amiimg' />
                    <p>The Citroën Ami is a four-door, front-wheel drive economy family car, manufactured and marketed by Citroën from 1961 to 1978.Over 1,840,396 units were manufactured over the entire production run. </p>
                    </div>
            
            </div>
            <div className='dyane'>
                    
                    <div className='dyane_title'>
                        <h2>SM</h2>
                    </div>
                    <div className='dyane_text'>
                    <img src={sm} alt='smimg' />
                    <p>The Citroën SM is a high-performance coupé produced by the French manufacturer Citroën from 1970 to 1975. The SM placed third in the 1971 European Car of the Year contest, trailing its stablemate Citroën GS, and won the 1972 Motor Trend Car of the Year award in the U.S. </p>
                    </div>
            
            </div>
            <div className='dyane'>
                    
                    <div className='dyane_title'>
                        <h2>Avant</h2>
                    </div>
                    <div className='dyane_text'>
                    <img src={avant} alt='avantimg' />
                    <p>The Citroën Traction Avant is the world’s first unibody front-wheel-drive car. A range of mostly 4-door saloons and executive cars, were made with four or six-cylinder engines, produced by the French manufacturer Citroën from 1934 to 1957. Approximately 760,000 units were produced.</p>
                    </div>
            
            </div>
        </div>
    </div>
  )
}

export default Oldtimers