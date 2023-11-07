import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProductByid } from '../redux/action'

const ProductCard = ({product}) => {
const navigate=useNavigate()
const dispatch = useDispatch()
const  funcDetail=()=>{
    dispatch(getProductByid(product._id))
 navigate(`/detail/${product._id}`)
    }
  return (
    <div className='product-card'>
      <div className="img">
        <img src={product.Poster} alt="" />
      </div>
      <div className="desc">
        <h3>{product.Title}</h3>
        <button onClick={funcDetail}>Detail</button>
      </div>
    </div>
  )
}

export default ProductCard
