import '../components/Navbar.css'
import Troll from '../assets/Trollface.png'
import React from 'react'

const Navbar = () => {
  return (
    //<div className="navbar">
      <header className='nav'>
          <img className='troll' src={Troll} alt="" />
          <h1 className="memetxt">Meme Generator</h1>
      </header>
    //</div>
  )
}

export default Navbar