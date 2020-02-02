import React from 'react';
import './project.css';

function Project() {
	const javascript = [
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
		{
			name: 'Countdown',
			image: '/images/projects/javascript-countdown.png',
			language: 'Angular',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/countdown'
		},
		{
			name: 'Image Carousel',
			image: '/images/projects/javascript-image-carousel.gif',
			language: 'Node',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/image-carousel'
		},
		{
			name: 'BMI Calculator',
			image: '/images/projects/javascript-bmi-calculator.png',
			language: 'Python',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/bmi-calculator'
		},
		{
			name: 'To Do List',
			image: '/images/projects/javascript-todo.png',
			language: 'Java',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/todo-list'
		},
		{
			name: 'Quote Generator',
			image: '/images/projects/javascript-quote-generator.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/todo-list'
		},
		{
			name: 'Pokedex',
			image: '/images/projects/javascript-pokedex.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/pokedex'
		},
		{
			name: 'Interactive Form',
			image: '/images/projects/javascript-pokedex.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/pokedex'
		},
		{
			name: 'List Pagination',
			image: '/images/projects/javascript-pokedex.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/pokedex'
		},
		{
			name: 'Secret Message',
			image: '/images/projects/javascript-pokedex.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/pokedex'
		},
		{
			name: 'CRUD App',
			image: '/images/projects/javascript-pokedex.png',
			language: 'JavaScript',
			live: '#',
			github: 'https://github.com/cconner57/Projects/tree/master/JavaScript/pokedex'
		}
	];

	const jsProjects = javascript.map((javascript, i) => {
		return (
			<div key={i} className="card center-align hoverable grow">
				<p className="project-title">
					{javascript.name}
				</p>
				<div className="card-image image-size">
					<img className="grow-image" src={javascript.image} alt={javascript.name} />
				</div>
				<div className="project-links">
					<a className=" light-blue accent-2 card-link waves-effect waves-light btn" href={javascript.live}>
						Demo
					</a>
					<a className="light-blue accent-2 card-link waves-effect waves-light btn" href={javascript.github}>
						Github
					</a>
				</div>
			</div>
		);
	});

	return <div className="project-container">{jsProjects}</div>;
}

export default Project;
