import React from 'react';
import index from "./index.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaFacebookSquare , FaInstagramSquare , FaYoutubeSquare} from "react-icons/fa";
import { useState } from 'react';
const Navbar = () => {
  const [showMediaIcons , setShowMediaIcons] = useState(false);

  return (
    <>
    <nav className="main-nav">
      {/* first logo part */}
      <div className='logo'>
        <h2>
          <span>S</span>hambhu
          <span>P</span>andey
        </h2>
      </div>


      {/* 2nd menu part */}
      <div className = {showMediaIcons ? "menu-link mobile-menu-link" :"menu-link"}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">constact</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      {/* 3rd menu part  */}
      <div className='social-media'>
        <ul className='social-media-desktop'>
          
          <li><a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=86" target="_pandey" ><FaFacebookSquare  className='facebook'/></a></li>

          <li><a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=86" target="_pandey" ><FaInstagramSquare  className='instagram'/></a></li>

          <li><a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=86" target="_pandey" ><FaYoutubeSquare  className='youtube'/></a></li>

        </ul> 
        <div className='hamburger-menu'>
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
        </div>
      </div>
    </nav>


    {/* hero section */}
    <section>
      <p>welcome to our website </p>
    </section>
    </>
  )
}

export default Navbar;