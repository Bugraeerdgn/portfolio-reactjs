function AboutAndSkills() {
  return (
    <>
      {/* About Section */}
      <section id="about">
        <div className="about-title">
          <h2>About</h2>
        </div>
        <p>
          I am a recent graduate aspiring to be a frontend developer. I am currently improving my skills in <strong>React.js</strong>, <strong>JavaScript</strong>, and <strong>SQL</strong>. I am eager to learn, adaptable to teamwork, and unafraid of taking responsibility. Thanks to my passion for technology, I aim to take an active and productive role in the software world.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>💼 Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>Java (OOP & JDBC)</li>
              <li>PHP (Basic)</li>
              <li>SQL / MySQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Tools</h3>
            <ul>
              <li>React.js</li>
              <li>Angular</li>
              <li>HTML5 & CSS3</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Other Tools</h3>
            <ul>
              <li>Postman(Basic)</li>
              <li>VS Code / IntelliJ IDEA</li>
              <li>XAMPP</li>
              <li>Figma (Basic)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutAndSkills;
