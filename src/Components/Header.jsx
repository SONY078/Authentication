import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id='flex-container'>
        <nav>
            <div id='flex-item'>
                <Link to='/login'><span>LOGIN</span></Link>
                <Link to='/logout'><span>LOGOUT</span></Link>
            </div>
        </nav>
    </div>
  )
}

export default Header;