import React from 'react';

function ContactCard() {
	return (
		<div className="row center-align social">
			<img className="circle" src="/images/avatar/chris.png" alt="Chris" height="220" />
			<h4>Chris Conner</h4>
			<div className="col l6 m5 s6">
				<a
					className="light-blue accent-2 waves-effect waves-light btn"
					href="https://github.com/cconner57"
					alt="..."
					rel="noopener noreferrer"
					target="_blank"
				>
					{' '}
					Github&nbsp;
					<i className="fab fa-github fa-3x" />
				</a>
			</div>
			<div className="col l6 m5 s6">
				<a
					className=" light-blue accent-2 waves-effect waves-light btn"
					href="https://www.linkedin.com/in/chris-conner-86306b16a"
					alt="..."
					rel="noopener noreferrer"
					target="_blank"
				>
					{' '}
					LinkedIn&nbsp;
					<i className="fab fa-linkedin fa-3x" />
				</a>
			</div>
		</div>
	);
}

export default ContactCard;
