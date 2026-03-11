const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2>About Us</h2>
        <p>
          Welcome to Khay's Brand! We are a passionate team of developers dedicated to 
          creating innovative web solutions. With years of experience in React, 
          JavaScript, and modern web technologies, we bring your ideas to life.
        </p>
        <div className="about-features">
          <div className="feature">
            <h3>🚀 Fast Performance</h3>
            <p>Optimized for speed and efficiency</p>
          </div>
          <div className="feature">
            <h3>📱 Mobile First</h3>
            <p>Responsive design for all devices</p>
          </div>
          <div className="feature">
            <h3>🎨 Modern UI</h3>
            <p>Clean and intuitive interfaces</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;