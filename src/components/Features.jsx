import { FaUserTie, FaComments, FaBell } from "react-icons/fa";
import "../css/Features.css";

const Features = () => {
  return (
    <section className="features-wrapper">
      <div className="features-container">

        <div className="feature-box">
          <div className="feature-icon">
            <FaUserTie size={28} color="#3b82f6" />
          </div>
          <div>
            <h4>Expert Instructors</h4>
            <p>Learn from industry professionals.</p>
          </div>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
             <FaComments size={28} color="#ff5c35" />
          </div>
          <div>
            <h4>Hands-On Training</h4>
            <p>Practical Projects & Real-World Skills.</p>
          </div>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
             <FaBell size={28} color="#22c55e" />
          </div>
          <div>
            <h4>Job Placement Support</h4>
            <p>Guidance to Land Your Dream Job.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
