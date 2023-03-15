import React from 'react'
import './main.css';
import Navbar from '../Navbar/Navbar';
import Cards from './Cards';
import { Grid } from '@mui/material';
import logo from '../../img/logo.png';
import dyane from '../../img/img1.png';
import cv from '../../img/img2.png';
import ami6 from '../../img/img4.png';
import cvV from '../../img/img5.png';
import ds from '../../img/img6.png';
import avant from '../../img/avant.png';
import sm from '../../img/sm.png';


const Main = () => {

  return (
    <div className='main'>
        <Navbar />
        <div className='header'>
        <Grid lg={12} item container spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <Cards 
              img={dyane}
              title='Dyane'
              p='since 1967 to 1983'
            />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Cards 
                img={sm}
                title='SM'
                p='since 1970 to 1975'
              />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Cards 
                img={ami6}
                title='Ami'
                p='since 1961 to 1978.'
              />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Cards 
                img={avant}
                title='Avant'
                p='since 1934 to 1957'
              />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Cards 
                img={cv}
                title='2cv6'
                p='since 1948 to 1990'
              />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Cards
                img={ds}
                title='DS'
                p='since 1955 to 1975.'
              />
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <div className='card-order'>
              <img src={logo} alt='img' />
              <div className='card-order-flex'>
                <h2>Order now your Citroen oldtimer</h2>
                <button>Get It</button>
              </div>
            </div>
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Main