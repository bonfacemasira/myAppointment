import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <a
        className="instagram social"
        target="_blank"
        aria-label="Instagram"
        href="https://www.instagram.com"
      >
        <FaInstagram size={"1.5em"} />
      </a>
      <a
        className="twitter social"
        target="_blank"
        aria-label="Twitter"
        href="https://www.twitter.com"
      >
        <FaTwitter size={"1.5em"} />
      </a>
      <a
        className="facebook social"
        target="_blank"
        aria-label="Facebook"
        href="https://www.facebook.com"
      >
        <FaFacebookF size={"1.5em"} />
      </a>
      <a
        className="tiktok social"
        target="_blank"
        aria-label="TikTok"
        href="https://www.tiktok.com"
      >
        <FaTiktok size={"1.5em"} />
      </a>
      <a
        className="youtube social"
        target="_blank"
        aria-label="YouTube"
        href="https://www.youtube.com"
      >
        <FaYoutube size={"1.5em"} />
      </a>
    </div>
  );
}

export default Header;
