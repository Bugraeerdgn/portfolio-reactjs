
import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


function Home() {
  return (
    <div className="home-page">
       <section id="hero" className="hero-section">
      <h1>Hello!</h1>
      <p>
        I'm <strong>Ahmet Buğra Erdoğan</strong> 👋 <br />
        I'm a passionate software enthusiast on the path to becoming a <strong>frontend developer</strong>.
        <br />
        Feel free to check out my projects to explore my skills and development journey.
      </p>
    </section>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default Home;