import React from 'react';
import './project.css';

function Project() {
	const projects = [
		{
			name: 'JS Clicker',
			image: '/images/projects/javascript-clicker.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/clicker'
		},
		{
			name: 'JS Clock',
			image: '/images/projects/javascript-clock.png',
			language: 'React',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/clock'
		},
		{
			name: 'JS Countdown',
			image: '/images/projects/javascript-countdown.png',
			language: 'Angular',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/countdown'
		},
		{
			name: 'JS Image Carousel',
			image: '/images/projects/javascript-image-carousel.gif',
			language: 'Node',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/image-carousel'
		},
		{
			name: 'JS BMI Calculator',
			image: '/images/projects/javascript-bmi-calculator.png',
			language: 'Python',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/bmi-calculator'
		},
		{
			name: 'JS To Do List',
			image: '/images/projects/javascript-todo.png',
			language: 'Java',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/todo-list'
		}
	];

	const insertProjects = projects.map((projects, i) => {
		return (
			<div key={i} className="card center-align hoverable grow">
				<p className="project-title">
					{projects.name}
				</p>
				<div className="card-image image-size">
					<img className="grow-image" src={projects.image} alt={projects.name} />
				</div>
				<div className="project-links">
					<a className=" light-blue accent-2 card-link waves-effect waves-light btn" href={projects.live}>
						Demo
					</a>
					<a className="light-blue accent-2 card-link waves-effect waves-light btn" href={projects.github}>
						Github
					</a>
				</div>
			</div>
		);
	});

	return <div className="project-container">{insertProjects}</div>;
}

export default Project;
