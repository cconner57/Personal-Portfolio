import React from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
		};
		xhr.send(data);
	};

	return (
		<div className="container">
			<Fade bottom>
				<Element id="contact">
					<h3>Contact</h3>
				</Element>
				<div className="row">
					<div className="col s10 offset-s1 center-align vcenter">
						<div className="card">
							<div className="card-content hoverable">
								<form onSubmit={handleSubmit} action="https://formspree.io/mvorpvwb" method="POST">
									<div className="row">
										<div className="input-field col s12">
											<i className="material-icons prefix hide-on-small-only">account_circle</i>
											<input
												placeholder="Enter Name"
												id="first_name"
												type="text"
												className="validate"
											/>
											<label className="black-text" htmlFor="first_name">
												Name
											</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<i className="material-icons prefix hide-on-small-only">email</i>
											<input
												placeholder="Enter Email"
												id="email"
												type="email"
												className="validate"
											/>
											<label className="black-text" htmlFor="email">
												Email
											</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<i className="material-icons prefix hide-on-small-only">mode_edit</i>
											<textarea
												placeholder="Enter Message"
												id="textarea"
												className="materialize-textarea"
											/>
											<label className="black-text" htmlFor="textarea">
												Message
											</label>
										</div>
									</div>
									<div className="card-action">
										<button
											className=" light-blue accent-2 btn waves-effect waves-light"
											type="submit"
											name="action"
										>
											Submit
											<i className="material-icons right">send</i>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Contact;
