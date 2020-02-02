import React from 'react';
import './project.css';

function ReactProjects() {
	const react = [
		{
			name: 'Clicker',
			image: '/images/projects/javascript-clicker.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/clicker'
		},
		{
			name: 'Clock',
			image: '/images/projects/javascript-clock.png',
			language: 'React',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/clock'
		},
	];

	const reactProjects = react.map((react, i) => {
		return (
			<div key={i} className="card center-align hoverable grow">
				<p className="project-title">
					{react.name}
				</p>
				<div className="card-image image-size">
					<img className="grow-image" src={react.image} alt={react.name} />
				</div>
				<div className="project-links">
					<a className=" light-blue accent-2 card-link waves-effect waves-light btn" href={react.live}>
						Demo
					</a>
					<a className="light-blue accent-2 card-link waves-effect waves-light btn" href={react.github}>
						Github
					</a>
				</div>
			</div>
		);
	});

	return <div className="project-container">{reactProjects}</div>;
}

export default ReactProjects;
