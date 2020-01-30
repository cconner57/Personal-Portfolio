import React from 'react';

function ContactCard() {
	return (
		<div className="row center-align">
			<img className="circle" src="/images/avatar/chris.png" alt="..." height="220" />
			<div className="col s12">
				<h4>Chris Conner</h4>
			</div>

			<div className="col s6">
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
			<div className="col s6">
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
