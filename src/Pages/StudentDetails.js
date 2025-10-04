import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import "./css/intern.css";

export default function StudentDetails() {
  const { id } = useParams(); // single param: "102-06-10-2004"
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  // Split the id into rollNo and dob
  const [rollNo, dob] = id.split("-").reduce((acc, val, index) => {
    if (index === 0) acc.push(val); // first part is rollNo
    else {
      if (!acc[1]) acc.push(val); // start dob
      else acc[1] += `-${val}`; // append rest of dob parts
    }
    return acc;
  }, []);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}api/searchStudent`,
          { rollNo, dob } // backend expects dd-mm-yyyy
        );
        setStudent(response.data);
      } catch (err) {
        console.error("Error fetching student:", err);
        alert(err.response?.data?.message || "Student not found!");
      }
    };

    fetchStudent();
  }, [rollNo, dob]);

  if (!student) return <center><h1 style={{ textAlign: "center" }}>Not Found</h1></center>;

  return (
    <div
      className="body-ip"
      style={{ background: "linear-gradient(135deg, #e3f2fd, #bbdefb)" }}
    >
      <div className="container-intern">
        <div className="result-container">
          <div className="left">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="right student-card">
            <h2>{student.name}</h2>
            <p>
              <strong>Roll No:</strong> {student.rollNo}
            </p>
            <p>
              <strong>DOB:</strong> {student.dob}
            </p>
            <p>
              <strong>Course:</strong> {student.course}
            </p>
            <p>
              <strong>Duration:</strong> {student.duration} months
            </p>

            <h3>Internship Modules</h3>
            <ul className="checklist">
              {student.internship?.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>

            <button
              className="back-btn"
              onClick={() => navigate("/internship")}
            >
              ⬅ Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
