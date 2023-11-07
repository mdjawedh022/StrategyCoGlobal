import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getProduct } from '../redux/action';

const Navbar = () => {
const [input, setInput]=useState('');
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/')
    dispatch(getProduct());
  }
  const dispatch= useDispatch()
 const handleClick=()=>{
  console.log(input)
  dispatch(getProduct(input))
  navigate("/"); 
  setInput("")
 }
  return (
    <div className='navbar'>
      <h2 onClick={handleNavigate}>IMDB</h2>
      <div className="search-div">
        <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
        
      </div>
    </div>
  )
}

export default Navbar
