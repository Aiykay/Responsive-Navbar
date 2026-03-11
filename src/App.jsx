import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="section hero">
          <div className="section-container">
            <h1>Welcome to Khay's Brand</h1>
            <p>Building the future of web development</p>
            <a href="#projects" className="cta-button">View Our Work</a>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Khay's Brand. All rights reserved.</p>
      </footer>
    </>
  );
}
export default App;