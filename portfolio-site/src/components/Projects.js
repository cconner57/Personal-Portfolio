import React, { useState } from 'react';
import Project from './Project';

function Projects() {
	const [ show, setShow ] = useState(true);

	function hideShow() {
		setShow(false);
	}

	let style = document.querySelectorAll('.grow');
	if (!show) style.display = 'none';

	const icons = [
		{
			name: 'fa-js-square',
			language: 'JavaScript'
		},
		{
			name: 'fa-react',
			language: 'React'
		},
		{
			name: 'fa-angular',
			language: 'Angular'
		},
		{
			name: 'fa-node',
			language: 'Node'
		},
		{
			name: 'fa-python',
			language: 'Python'
		},
		{
			name: 'fa-java',
			language: 'Java'
		}
	];

	const filteredIcons = icons.map((icons, i) => {
		return (
			<div key={i} className="col s1">
				<button
					className="light-blue accent-2 waves-effect waves-light btn-floating hoverable"
					onClick={`filterSelection(${icons.language})`}
				>
					<i className={`fab ${icons.name} fa-2x`} />
				</button>
			</div>
		);
	});

	return (
		<div class="container">
			<a id="projects" />
			<h3>Projects</h3>
			<div className="row valign-wrapper">
				<button className="col s2 light-blue accent-2 waves-effect waves-light btn" onClick={hideShow}>
					Show All
				</button>
				{filteredIcons}
			</div>
			<Project />
		</div>
	);
}

export default Projects;
