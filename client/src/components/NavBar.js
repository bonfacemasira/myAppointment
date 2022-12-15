import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <div className="NavBar">
        <div>Logo</div>
        <nav className='navigation'>
          <Link to="/">Home</Link>
          <Link to="about" activeStyle= {{background: "darkblue"}}>About</Link>
          <Link to="packages" activeStyle= {{background: "darkblue"}}>Packages</Link>
          <Link to="media" activeStyle= {{background: "darkblue"}}>Media</Link>
          <Link to="contactus" activeStyle= {{background: "darkblue"}}>Contact Us</Link>
        </nav>
      </div>
    );
  }
  
  export default NavBar;
  