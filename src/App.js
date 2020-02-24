import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.scss'

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
