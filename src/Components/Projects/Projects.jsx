import React from 'react'
import "./Projects.css"
import project_1 from "../../assets/project_1.jpg"
import project_2 from "../../assets/project_2.jpg"
import project_3 from "../../assets/project_3.jpg"

const Projects = () => {
  return (
    <div class="container my-4" id="projects">
    <h3 class="fs-2 text-center">OUR PROJECTS</h3>
    <div class="cards">
        <div class="card my-2">
            <img src={project_1} style={{width: '100%', height: '200px',cursor:'pointer'}}/>
        </div>
        <div class="card">
            <img src={project_2} style={{width: '100%', height: '200px',cursor:'pointer'}}/>
        </div>
        <div class="card">
            <img src={project_3} style={{width: '100%', height: '200px',cursor:'pointer'}}/>
        </div>
    </div>
 </div>
  )
}

export default Projects