import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./css/intern.css"; // import the CSS file

export default function Intern() {
  const [rollNo, setRollNo] = useState("");
  const [dob, setDOB] = useState("");
  const [student, setStudent] = useState(null);

  // Mock student data
  const students = {
    "101": { name: "Rahul Kumar", dob: "06-10-2004", internship: "Web Development at Infosys", duration: "3 Months" },
    "102": { name: "Priya Sharma", dob: "12-11-2004", internship: "Data Science at TCS", duration: "2 Months" },
    "103": { name: "Amit Verma", dob: "24-09-2004", internship: "UI/UX at Wipro", duration: "1 Month" },
  };

  // Date formatter
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [yyyy, mm, dd] = dateStr.split("-");
    return `${dd}-${mm}-${yyyy}`;
  };

  const handleSearch = () => {
    const formattedDOB = formatDate(dob);
    const studentData = students[rollNo];
    if (studentData && studentData.dob === formattedDOB) {
      setStudent(studentData);
      setRollNo("");
      setDOB("");
    } else {
      alert("No internship details found for this Roll Number or DOB!");
    }
  };

  return (
    <div className="body-ip">
          <div className="container">
      {!student ? (
        <div className="search-container">
          {/* Left Side - Lottie */}
          <div className="left">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "300px", width: "300px" }}
            />
          </div>

          {/* Right Side - Search Form */}
          <div className="right">
            <div className="search-box">
              <h1>🔍 Internship Lookup</h1>
              <p className="subtitle">
                Enter your Roll Number & Date of Birth to view internship details.
              </p>

              <input
                type="text"
                placeholder="Enter Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
              <input
                type="date"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <div className="left">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="right">
            <h2>{student.name}</h2>
            <p><strong>Internship:</strong> {student.internship}</p>
            <p><strong>Duration:</strong> {student.duration}</p>
            <button onClick={() => setStudent(null)}>Back</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
