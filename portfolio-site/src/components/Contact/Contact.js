import React from 'react';
import '../../App.css';

function Contact() {
	return (
		<div class="container" style={{ height: 3000 }}>
			<span id="contact" class="anchor" />
			<h1>Contact Me</h1>
			<button
				type="button"
				class="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
				data-whatever="@mdo"
			>
				<i class="fas fa-paper-plane fa-3x" />
			</button>

			<a href="https://github.com/cconner57" rel="noopener noreferrer" target="_blank">
				<i class="fab fa-github fa-3x" />
			</a>
			<a href="https://www.linkedin.com/in/chris-conner-86306b16a" rel="noopener noreferrer" target="_blank">
				<i class="fab fa-linkedin fa-3x" />
			</a>
		</div>
	);
}

export default Contact;
