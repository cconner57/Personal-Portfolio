import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<div>
			<Navbar />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
