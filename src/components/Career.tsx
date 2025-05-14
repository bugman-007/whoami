import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Optical Brand</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed a dynamic WebGL-based 3D configurator integrated into
              the client’s Shopify store. Users could customize sofas with
              real-time fabric and leg changes, and see photorealistic renders
              powered by PBR materials. I built custom shaders for soft shadows
              and reflection mapping, implemented lazy-loading models for
              performance, and ensured smooth touch/mobile responsiveness.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Three.js Engineer</h4>
                <h5>Trustart Inc</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered a VR eyewear try-on experience for Meta Quest using
              Unity WebGL and a custom backend. Implemented accurate lens
              simulation with depth-of-field, manual calibration features, and
              seamless transitions between styles. I also built a menu-driven UI
              and deployed the experience for both standalone VR and mobile
              WebXR environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Three.js based Frontend Engineer</h4>
                <h5>Freelancer</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Whether you're a startup prototyping a 3D experience or an
              enterprise needing a production-grade interactive system, I can
              join your team at any stage — from concept to deployment — and
              deliver quality and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
