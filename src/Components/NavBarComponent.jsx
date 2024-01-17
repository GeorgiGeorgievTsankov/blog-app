import React from 'react'
import './NavBarComponent.css'



function NavBarComponent() {
  return (
   <div className="navBar">
    <div className="navMenuBox">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/add">Add</a>
    </div>
   </div>
  )
}

export default NavBarComponent