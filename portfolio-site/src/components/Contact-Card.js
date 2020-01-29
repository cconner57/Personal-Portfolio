import React from 'react';

function ContactCard() {
	return (
		<div className="card hoverable">
			<div className="row card-content center-align">
				<img className="circle" src="/images/avatar/chris.png" height="220" />
				<div className="col s12">
					<h4>Chris Conner</h4>
				</div>

				<div className="col">
					<a
						className="waves-effect waves-light btn"
						href="https://github.com/cconner57"
						rel="noopener noreferrer"
						target="_blank"
					>
						{' '}
						Github
						<i class="fab fa-github fa-3x" />
					</a>
				</div>
				<div className="col">
					<a
						className="waves-effect waves-light btn"
						href="https://www.linkedin.com/in/chris-conner-86306b16a"
						rel="noopener noreferrer"
						target="_blank"
					>
						{' '}
						LinkedIn
						<i class="fab fa-linkedin fa-3x" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
