import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div class="social-links">
    <div class="container">
    <div class="row">
     <div class="col-4">
        <h3 class="fs-2">Quick Links</h3>
        <a href="#hero"><p>Home</p></a>
        <a href="#hero"><p>About</p></a>
        <a href="#project"><p>Projects</p></a>
        <a href="#contact"><p>Contact</p></a>
        
     </div>
     <div class="col-4">
        <h3 class="fs-2">Social Links</h3>
        <a href="https://www.facebook.com/profile.php?id=100068863898913"><p>FaceBook</p></a>
        <a href="https://www.instagram.com/srajs4612/"><p>Instagram</p></a>
        <p>Twitter</p>
        <p>Linked In</p>
     </div>
     <div class="col-4">
        <h3 class="fs-2">Projects Links</h3>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
     </div>
    </div>
</div>
<div class="footer">
    <div class="container text-center">
        <p>WebMaster 2025 &copy; All rights reserved</p>
    </div>
</div>
 </div>
  )
}

export default Footer