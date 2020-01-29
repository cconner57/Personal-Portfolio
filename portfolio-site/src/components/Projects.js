import React from 'react';
import Project from './Project';

function Projects() {
	const array = [ 'fa-js-square', 'fa-react', 'fa-angular', 'fa-node', 'fa-python', 'fa-java' ];

	const icons = array.map((icon) => {
		return (
			<div className="col s1">
				<a href="#">
					<i key={icon} className={`fab ${icon} fa-2x`} />
				</a>
			</div>
		);
	});

	return (
		<div class="container">
			<a id="projects" />
			<span class="anchor" id="projects" />
			<h3>Projects</h3>
			<div className="row valign-wrapper">
				<h5 className="col s1">Filter:</h5>
				{icons}
			</div>
			<Project />
		</div>
	);
}

export default Projects;
