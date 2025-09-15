import React from "react";
import logo_img from "../images/littlelemon_logo.png"

const Nav = () => {
  return (
    <nav>
      <img src={logo_img} alt="Little Lemon Logo" ></img>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/Booking">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  )
}
export default Nav;