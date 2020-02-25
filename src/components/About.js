import React from 'react';
import ContactCard from './Contact-Card';
import { Element } from 'react-scroll';

function About() {
	return (
		<div className="container fadein">
			<Element id="about">
				<h3>About</h3>
			</Element>
			<div className="row acenter">
				<div className="col m6 s12">
					<ContactCard />
				</div>
				<div className="card-height card col m6 s12 hoverable">
					<p className="card-content">
						My name is Chris Conner. I’m an ambitious front-end developer who is actively seeking to improve
						my skillset. I'm eager to learn about this field and stay up to date with the latest
						technologies, often spending hours researching online and creating projects. Programming is a
						passion of mine as I enjoy the satisfaction of turning a concept into reality, taking pride in
						the finished product.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
