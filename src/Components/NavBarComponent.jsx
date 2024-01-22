import React from 'react'
import './NavBarComponent.css'
import { Link } from 'react-router-dom'



function NavBarComponent() {
  return (
   <div className="navBar">
    <div className="navMenuBox">
    <Link to="/" >Home</Link>
    <Link to="/add-content">Add</Link>
    </div>
   </div>
  )
}

export default NavBarComponent
