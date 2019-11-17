import React, { Component } from 'react'
import Project from '../Projects/Project/Project'
import '../../App.css'

class Projects extends Component {
    render() {

        let array = ['fa-html5', 'fa-css3-alt', 'fa-js-square', 'fa-react', 'fa-angular', 'fa-node', 'fa-python', 'fa-java'];

        let icons = array.map(icon => {
            return <a href='...'><i key={icon} className={`fab ${icon} fa-3x`} /></a>
        });
        
        return (
            <div class='alert-danger'>
                <span class="anchor" id="projects"></span>
                <h1>Projects</h1>
                
                <div>
                    <h3>Filter:</h3>
                    { icons }
                </div>
                <div>
                    <Project/>
                </div>

            </div>
        )
    }
}

export default Projects