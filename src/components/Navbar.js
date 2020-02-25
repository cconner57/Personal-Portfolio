import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
	return (
		<div className="navbar-fixed fadein">
			<nav className="nav-extended light-blue accent-4">
				<div className="nav-content container">
					<ul className="tabs tabs-transparent row">
						<li className="tab col s3">
							<Link className="navtext" activeClass="active" to="about" smooth={true} offset={-70} duration={750}>
								About
							</Link>
						</li>
						<li className="tab col s3">
							<Link className="navtext" activeClass="active" to="skills" smooth={true} offset={-70} duration={750}>
								Skills
							</Link>
						</li>
						<li className="tab col s3">
							<Link className="navtext" activeClass="active" to="projects" smooth={true} offset={-70} duration={750}>
								Projects
							</Link>
						</li>
						<li className="tab col s3">
							<Link className="navtext" activeClass="active" to="contact" smooth={true} offset={-70} duration={750}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
