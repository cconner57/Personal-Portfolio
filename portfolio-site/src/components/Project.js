import React from 'react';
import './project.css';

function Project() {
	const projects = [
		{
			name: 'JS Clicker',
			image: '/images/projects/javascript-clicker.png',
			language: 'JavaScript',
			live: '#',
			github: '#'
		},
		{
			name: 'JS Clock',
			image: '/images/projects/javascript-clock.png',
			language: 'JavaScript',
			live: '#',
			github: '#'
		},
		{
			name: 'JS Countdown',
			image: '/images/projects/javascript-countdown.png',
			language: 'JavaScript',
			live: '#',
			github: '#'
		},
		{
			name: 'JS Image Carousel',
			image: '/images/projects/javascript-image-carousel.gif',
			language: 'JavaScript',
			live: '#',
			github: '#'
		},
	];

	const insertProjects = projects.map((projects, i) => {
		return (
			<div className="card center-align hoverable grow">
				<p key={i} className="project-title">
					{projects.name}
				</p>
				<div className="card-image image-size">
					<img className="grow-image" src={projects.image} />
				</div>
				<div className="project-links">
					<a className="card-link" href={projects.live}>
						Live
					</a>
					<a className="card-link" href={projects.github}>
						Github
					</a>
				</div>
			</div>
		);
	});

	return (
		<div className="project-container">
			{insertProjects}
		</div>
	);
}

export default Project;
