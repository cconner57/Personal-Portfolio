import React from 'react';
import '../Navbar/Navbar.css';

function Navbar() {
	return (
		<div class="header">
			<a href="#home">
				<img class="profile" src="/images/avatar/chris.png" alt="Chris" height="70" />
				<span class="name">Chris</span>
			</a>
			<nav>
				<ul class="nav-links">
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
				</ul>
			</nav>
			<a class="cta" href="#contact">
				<button>Contact</button>
			</a>
		</div>
	);
}

export default Navbar;
