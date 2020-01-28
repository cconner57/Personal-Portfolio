import React from 'react';

function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<a id="contact" />
			<div>
				<h3>Contact Me</h3>
				<div className="row">
					<div className="col s8 offset-s2 center-align">
						<div className="card">
							<div className="card-content hoverable">
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="input-field col s12">
											<input
												placeholder="Enter Name"
												id="first_name"
												type="text"
												class="validate"
											/>
											<label className="black-text" for="first_name">Name</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input
												placeholder="Enter Email"
												id="email"
												type="email"
												className="validate"
											/>
											<label className="black-text" HTMLfor="email">Email</label>
										</div>
									</div>
									<div class="row">
										<div class="input-field col s12">
											<textarea
												placeholder="Enter Message"
												id="textarea"
												class="materialize-textarea"
											/>
											<label className="black-text" for="textarea">Message</label>
										</div>
									</div>
									<div className="card-action">
										<button
											class="btn waves-effect waves-light"
											type="submit"
											name="action"
										>
											Submit
											<i class="material-icons right">send</i>
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="s4">
							<h4 className="">Social</h4>
						</div>
						<div className="col s4 offset-s2">
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
						<div className="col s1">
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
			</div>
		</div>
	);
}

export default Contact;
