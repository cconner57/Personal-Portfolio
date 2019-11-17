import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div class='container bg-white' data-spy="scroll" data-target="#navbar" data-offset="0">
      
      <Navbar/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
