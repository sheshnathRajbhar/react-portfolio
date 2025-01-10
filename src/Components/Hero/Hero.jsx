import React from 'react'
import "./Hero.css"
import jack from "../../assets/jack.jpg"
const Hero = () => {
  return (
    <div class="main container" id="hero">
    <div class="main_left">
        <div class="main_left_content">
            <h1 class="main_left_content_title">Hello, I'm <span>Sheshnath</span></h1>
            <p class="main_left_content_description">Sheshnath is a skilled developer specializing in both frontend and backend development. With expertise in HTML, CSS, JavaScript, and backend technologies like node.js and Python, he builds dynamic, scalable web solutions. Additionally, Sheshnath leverages Google Analytics to optimize user experience and measure website performance. His technical proficiency ensures seamless, data-driven, and responsive web applications.</p>
            <button class="main_left_content_button"><a href="CVV.docx" download="">Download CV</a></button>
        </div>
    </div>
    <div class="main_right">
        <img src={jack} alt="hero" style={{width:'100%'}}/>
    </div>
</div>
  )
}

export default Hero