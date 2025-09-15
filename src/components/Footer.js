import React from "react"
import logo_img_small from "../images/small_logo.png"

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={logo_img_small} alt="logo"/>
        </div>
        <div>
          <h3>Document Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href="/">Address</a></li>
            <li><a href="/">Phone Number</a></li>
            <li><a href="/">Email</a></li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="/">Address</a></li>
            <li><a href="/">Phone Number</a></li>
            <li><a href="/">Email</a></li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer;