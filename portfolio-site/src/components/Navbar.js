import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
	return (
		<div className="navbar-fixed">
			<nav className="nav-extended light-blue accent-4">
				<div className="nav-content container">
					<ul className="tabs tabs-transparent row">
						<li className="tab col s3">
							<a href="#about">About</a>
						</li>
						<li className="tab col s3">
							<a href="#skills">Skills</a>
						</li>
						<li className="tab col s3">
							<a href="#projects">Projects</a>
						</li>
						<li className="tab col s3">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
