import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateToShop = () => {
    navigate('/gallery')
  }
  return (
    <>
      <div className="home_container">
        <h1>Welcome to Flower Shop</h1>
        <p>Your one-stop shop for all things flowers!</p>
        <button onClick={()=>navigateToShop()}>Shop here</button>
      </div>
    </>
  )
}

export default Home
