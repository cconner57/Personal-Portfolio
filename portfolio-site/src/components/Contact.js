import React from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<Fade bottom>
				<Element id="contact">
					<h3>Contact</h3>
				</Element>
				<div className="row">
					<div className="col s8 offset-s2 center-align vcenter">
						<div className="card">
							<div className="card-content hoverable">
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="input-field col s12">
											<i class="material-icons prefix hide-on-small-only">account_circle</i>
											<input
												placeholder="Enter Name"
												id="first_name"
												type="text"
												class="validate"
											/>
											<label className="black-text" for="first_name">
												Name
											</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<i class="material-icons prefix hide-on-small-only">email</i>
											<input
												placeholder="Enter Email"
												id="email"
												type="email"
												className="validate"
											/>
											<label className="black-text" HTMLfor="email">
												Email
											</label>
										</div>
									</div>
									<div class="row">
										<div class="input-field col s12">
											<i class="material-icons prefix hide-on-small-only">mode_edit</i>
											<textarea
												placeholder="Enter Message"
												id="textarea"
												class="materialize-textarea"
											/>
											<label className="black-text" for="textarea">
												Message
											</label>
										</div>
									</div>
									<div className="card-action">
										<button
											class=" light-blue accent-2 btn waves-effect waves-light"
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
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Contact;
