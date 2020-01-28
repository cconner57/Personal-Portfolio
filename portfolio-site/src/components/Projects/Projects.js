import React from 'react';
import Project from '../Projects/Project/Project';

function Projects() {
	const array = [
		'fa-html5',
		'fa-css3-alt',
		'fa-js-square',
		'fa-react',
		'fa-angular',
		'fa-node',
		'fa-python',
		'fa-java'
	];

	const icons = array.map((icon) => {
		return (
			<div className="col s1">
				<a href="...">
					<i key={icon} className={`fab ${icon} fa-3x`} />
				</a>
			</div>
		);
	});

	return (
		<div class="container">
			<a id="projects" />
			<span class="anchor" id="projects" />
			<h3>Projects</h3>
			<div className="card">
				<p className="card-content hoverable">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus nisl at nibh cursus, ac
					sodales mi lobortis. Cras finibus tincidunt varius. Maecenas a quam lectus. Nunc molestie sem orci,
					sed sagittis velit auctor eu. Quisque condimentum laoreet tristique. Proin nec ipsum tellus. Donec
					eu commodo lorem, non sodales est. Donec et vestibulum lorem. Nulla fringilla erat nec magna
					venenatis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel sagittis risus.
					Etiam porttitor interdum enim non gravida. Duis tincidunt elementum fringilla. Nunc viverra dui a
					lobortis vulputate. Nulla eu venenatis lorem.
				</p>
			</div>
			<div className="container">
				<div className="row valign-wrapper">
					<h5 className="col s1">Filter:</h5>
					{icons}
				</div>
			</div>
			<div>
				<Project />
			</div>
		</div>
	);
}

export default Projects;
