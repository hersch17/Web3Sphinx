import React from 'react'
import "./header.css"
import logo from "../pics/logo.png"

const Header = () => {
  return (
    <div>
        <div className='header'>
            <div className='logo'><img className= "logo-png"src={logo}/></div>
            <div className='bank-name'>DBank</div>
            <div className='sign-out'>SIGN OUT</div>
        </div>

      
    </div>
  )
}

export default Header
