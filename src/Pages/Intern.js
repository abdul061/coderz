import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/intern.css";

export default function Intern() {
  const [rollNo, setRollNo] = useState("");
  const [dob, setDOB] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!rollNo || !dob) {
      alert("Please enter Roll Number and DOB!");
      return;
    }

    try {
      const formattedDob = formatDate(dob); // dd-mm-yyyy
      // Option 1: Navigate with params (fetch details in details page)
      navigate(`/internship/${rollNo}-${formatDate(dob)}`);

      // Option 2: If you want to send student data directly (less common), 
      // you could fetch here and use navigate with state:
      // const response = await axios.post("http://localhost:5000/api/searchStudent", { rollNo, dob: formattedDob });
      // navigate(`/student/${rollNo}-${formattedDob}`, { state: response.data });

      setRollNo("");
      setDOB("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error fetching student details");
    }
  };

  const formatDate = (dateStr) => {
    const [yyyy, mm, dd] = dateStr.split("-");
    return `${dd}-${mm}-${yyyy}`;
  };

  return (
    <div className="body-ip">
      <div className="container-intern">
        <div className="search-container">
          <div className="left">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <div className="right">
            <div className="search-box">
              <h1>🔍 Internship Lookup</h1>
              <p className="subtitle">Enter your Roll Number & Date of Birth to view internship details.</p>

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
      </div>
    </div>
  );
}
