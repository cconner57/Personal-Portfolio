import React from 'react';

function Skills() {
	let array = [
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

	let images = array.map((image) => {
		return (
			<div className="col l3 m4 s5">
				<img
					key={image}
					src={require(`../../public/images/skills/${image}`)}
					alt="Programming Language"
					height="75"
				/>
			</div>
		);
	});

	return (
		<div className="container">
			<a id="skills" />
			<h3>Skills</h3>
			<div className="row valign-wrapper">
				<div className="col s6 card hoverable">
					<p className="card-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus nisl at nibh cursus,
						ac sodales mi lobortis. Cras finibus tincidunt varius. Maecenas a quam lectus. Nunc molestie sem
						orci, sed sagittis velit auctor eu. Quisque condimentum laoreet tristique. Proin nec ipsum
						tellus. Donec eu commodo lorem, non sodales est. Donec et vestibulum lorem. Nulla fringilla erat
						nec magna venenatis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
						sagittis risus. Etiam porttitor interdum enim non gravida. Duis tincidunt elementum fringilla.
						Nunc viverra dui a lobortis vulputate. Nulla eu venenatis lorem.
					</p>
				</div>
				<div className="col s6">{images}</div>
			</div>
		</div>
	);
}

export default Skills;
