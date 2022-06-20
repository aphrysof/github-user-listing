import React from 'react'
import "./navbar.css"
import  logo  from '../../assets/logo.png'

const Index = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt = "logo" />
      </div>
        <div className = "nav--searchInput">
          <input type = "search" name='search' />
          <button className='search--button'>Search</button>
        </div>
    </nav>
  )
}

export default Index