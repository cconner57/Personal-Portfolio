import React from 'react';

function About() {
	return (
		<div className="container">
			<a id="about" />
			<h3>About</h3>
			<div className="row valign-wrapper">
				<div className="col s6">
					<div className="container">
						<img
							className="circle hoverable"
							src="/images/avatar/chris.png"
							height="260"
							vertical-align="middle"
						/>
					</div>
				</div>
				<div className="card col s6 hoverable">
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
			</div>
		</div>
	);
}

export default About;
