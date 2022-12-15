import React from "react";
import { FaFacebookF, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <a href="https://www.twitter.com" className='twitter social'>
        <FaTwitter />
      </a>
      <a href="https://www.facebook.com" className='facebook social'>
        <FaFacebookF />
      </a>
      <a href="https://www.tiktok.com" className='tiktok social'>
        <FaTiktok />
      </a>
      <a href="https://www.youtube.com" className='youtube social'>
        <FaYoutube />
      </a>
    </div>
  );
}

export default Header;
