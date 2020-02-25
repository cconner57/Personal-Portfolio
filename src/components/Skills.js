import React from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

function Skills() {
	let images = [
		'html5.png',
		'css.png',
		'javascript.png',
		'react.png',
		'angular.png',
		'express.png',
		'node.jpg',
		'mongodb.png',
		'mysql.png',
		'python.png',
		'sass.png',
		'aws.png'
	];

	let icons = images.map((icon) => {
		return (
			<div className="col m4 s6 push-l2">
				<img
					key={icon}
					src={require(`../../public/images/skills/${icon}`)}
					alt="Programming Language"
					height="75"
				/>
			</div>
		);
	});

	return (
		<div className="container">
			<Fade left>
				<Element id="skills">
					<h3>Skills</h3>
				</Element>
			</Fade>
			<div className="row  pcenter">
				<Fade left>
					<div className="col m6 card hoverable hide-on-small-only">
						<p className="card-content">
							I started learning HTML, CSS, and JavaScript in 2018 while taking Treehouse Courses. Later,
							enrolled into Coding Dojo to learn more about JavaScript and other coding languages. In the
							bootcamp, I learned JQuery, Python, JavaScript, Angular, Node.JS, MongoDB, and MySQL. After
							finishing the bootcamp, I got certified as an AWS Cloud Practitioner and found my interest
							in Front End Development. I'm focusing my efforts on learning React.
						</p>
					</div>
				</Fade>
				<Fade right>
					<div className="col m6 s12">{icons}</div>
				</Fade>
			</div>
		</div>
	);
}

export default Skills;
