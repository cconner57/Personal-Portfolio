import React from 'react';
import JSProject from './Projects/JS-Projects';
import ReactProjects from './Projects/React-Projects';
import AngularProjects from './Projects/Angular-Projects';
import PythonProjects from './Projects/Python-Projects';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

function Project() {
	return (
		<div className="container">
			<Fade left>
				<Element id="projects">
					<h3>Projects</h3>
				</Element>
				<h5>Top Projects</h5>
				<div className="spacing">
					<div className="col m4 s12 card">
						<p className="project-title">Wedding Site</p>
						<div className="card-image image-size imgcenter">
							<img className="grow-image" src="/images/projects/wedding.png" alt="" />
						</div>
						<div className="project-links">
							<a
								className=" light-blue accent-2 card-link waves-effect waves-light btn"
								href="https://www.chrisandallison2021.com"
							>
								Demo
							</a>
							<a
								className="light-blue accent-2 card-link waves-effect waves-light btn"
								href="https://github.com/cconner57/Wedding"
							>
								Github
							</a>
						</div>
					</div>
					<div className="col m4 s12 card">
						<p className="project-title">Jeopardy Game</p>
						<div className="card-image image-size imgcenter">
							<img className="grow-image" src="/images/projects/ComingSoon.png" alt="" />
						</div>
						<div className="project-links">
							<a
								className=" light-blue accent-2 card-link waves-effect waves-light btn"
								href="https://jeopardy-clone.netlify.com"
							>
								Demo
							</a>
							<a
								className="light-blue accent-2 card-link waves-effect waves-light btn"
								href="https://github.com/cconner57/Projects/tree/master/React/jeopardy-app"
							>
								Github
							</a>
						</div>
					</div>
					<div className="col m4 s12 card">
						<p className="project-title">The Catty Shack</p>
						<div className="card-image image-size imgcenter">
							<img className="grow-image" src="/images/projects/ComingSoon.png" alt="" />
						</div>
						<div className="project-links">
							<a className=" light-blue accent-2 card-link waves-effect waves-light btn" href="https://gatsby-pet-adoption.netlify.com">
								Demo
							</a>
							<a className="light-blue accent-2 card-link waves-effect waves-light btn" href="https://github.com/cconner57/GatsbyJS-Pet-Adoption">
								Github
							</a>
						</div>
					</div>
				</div>
				<div className="pcenter">
					<ul className="collapsible popout">
						<li>
							<div className="collapsible-header blue-text">
								<i className="fab fa-js-square fa-2x" />JavaScript
							</div>
							<div className="collapsible-body">
								<JSProject />
							</div>
						</li>
						<li>
							<div className="collapsible-header blue-text">
								<i className="fab fa-react fa-2x" />React
							</div>
							<div className="collapsible-body">
								<ReactProjects />
							</div>
						</li>
						<li>
							<div className="collapsible-header blue-text">
								<i className="fab fa-angular fa-2x" />Angular
							</div>
							<div className="collapsible-body">
								<AngularProjects />
							</div>
						</li>
						<li>
							<div className="collapsible-header blue-text">
								<i className="fab fa-python fa-2x" />Python
							</div>
							<div className="collapsible-body">
								<PythonProjects />
							</div>
						</li>
					</ul>
				</div>
			</Fade>
		</div>
	);
}

export default Project;
