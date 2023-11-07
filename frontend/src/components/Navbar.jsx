import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/')
  }
  return (
    <div className='navbar'>
      <h2 onClick={handleNavigate}>IMDB</h2>
      <div className="search-div">
        <input type="text" />
        <button>Search</button>
        
      </div>
    </div>
  )
}

export default Navbar
