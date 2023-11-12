import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='buttons'>
            <Link to='users'><button>USERS</button></Link>
        </div>
    </div>
  )
}

export default Header
