import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
	return (
		<div className="navbar-fixed">
			<nav className="nav-extended green valign-wrapper">
				<Router>
					<div className="nav-wrapper container">
						<div className="container ">
							<span className="brand-logo">Chris</span>
						</div>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<Link smooth to="/#about">
									About
								</Link>
							</li>
							<li>
								<Link smooth to="/#skills">
									Skills
								</Link>
							</li>
							<li>
								<Link smooth to="/#projects">
									Projects
								</Link>
							</li>
							<li>
								<Link smooth to="/#contact">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</Router>
				<div className="nav-content hide-on-large-only container">
					<ul className="tabs tabs-transparent">
						<li className="tab">
							<a href="#about">About</a>
						</li>
						<li className="tab">
							<a href="#skills">Skills</a>
						</li>
						<li className="tab">
							<a href="#projects">Projects</a>
						</li>
						<li className="tab">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
