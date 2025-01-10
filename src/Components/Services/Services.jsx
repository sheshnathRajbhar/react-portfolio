import React from 'react'
import "./Services.css"
const Services = () => {
  return (
    <div class="container my-4" id="service">
    <h2 class="text-center fs-2">OUR SERVICES</h2>
    <div class="my-2 cards">
        <div class="card">
            <h2 class="fs-2">Frontend Development</h2>
            <p>A Frontend Developer portfolio highlights skills in HTML, CSS, JavaScript, and frameworks like React js. The portfolio reflects the developer's ability to create visually appealing and user-friendly web experiences</p>
        </div>

        <div class="card">
            <h2 class="fs-2">Backend Development</h2>
            <p>A Backend Developer portfolio showcases skills in server-side programming, databases, and API development. It typically includes projects using languages like Python, Node.js The portfolio demonstrates the ability to build scalable.</p>
        </div>

        <div class="card">
            <h2 class="fs-2">Google Analytics</h2>
            <p>Google Analytics is a tool for tracking and analyzing website traffic. It provides insights into user behavior, demographics, and conversions. It helps optimize website performance and measure marketing campaign effectiveness..</p>
        </div>
    </div>
</div>
  )
}

export default Services