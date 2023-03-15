import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css';
import logo from '../../img/icon.png';
import AiFillHome from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='logo' to='/'>
        <img src={logo} alt='logo' className='logoimg' />
      </Link>
      <nav>
        <NavLink exact='true' to='/' className='nav-item'>
          Home
        </NavLink>
        <NavLink exact='true' to='/club' className='nav-item'>
          Club Čuk
        </NavLink>
        <NavLink exact='true' to='/oldtimers' className='nav-item'>
          Oldtimers
        </NavLink>
        <NavLink exact='true' to='/order' className='nav-item'>
          Order
        </NavLink>
        <NavLink exact='true' to='/find' className='nav-item'>
          Find us
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar