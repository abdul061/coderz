import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import "../css/intern.css";

export default function StudentDetails() {
  const { id } = useParams(); // e.g. "102-04-08-2007" or "102-08-04-2007" or "102-2007-08-04"
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Helper to pad numbers
  const pad = (n) => (n.toString().length === 1 ? `0${n}` : n);

  // Normalize DOB into DD-MM-YYYY (best-effort detection)
  const parseAndNormalizeDob = (parts) => {
    // parts: array of strings, expected length 3 (like ["04","08","2007"])
    if (parts.length !== 3) return parts.join("-");

    const [a, b, c] = parts;
    // try to detect year position
    if (a.length === 4) {
      // a is year => a-b-c is YYYY-MM-DD => return DD-MM-YYYY
      return `${pad(c)}-${pad(b)}-${a}`;
    }
    if (c.length === 4) {
      // c is year => a-b-c where a and b are day/month or month/day.
      const nA = Number(a);
      const nB = Number(b);
      // if first part > 12 it's definitely day
      if (nA > 12 && nA <= 31) {
        return `${pad(nA)}-${pad(nB)}-${c}`; // a = day, b = month
      }
      // if second part > 12 then second is day
      if (nB > 12 && nB <= 31) {
        return `${pad(nB)}-${pad(nA)}-${c}`; // b = day, a = month
      }
      // ambiguous (both <=12). Assume input is DD-MM-YYYY (most common for you)
      return `${pad(nA)}-${pad(nB)}-${c}`;
    }
    // fallback: join
    return parts.join("-");
  };

  // Split id into rollNo and dobParts
  // id format assumed: "<roll>-<part1>-<part2>-<part3>"
  const [rollNo, ...dobParts] = id.split("-");

  // create normalizedDob used for both display and request
  const normalizedDob = parseAndNormalizeDob(dobParts);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        console.log("Searching student:", rollNo, normalizedDob);
        const response = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}api/searchStudent`,
          { rollNo, dob: normalizedDob } // send normalized DOB to backend
        );
        setStudent(response.data);
      } catch (err) {
        console.error("Error fetching student:", err);
        setStudent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [rollNo, normalizedDob]);

  if (loading) return <center><h1>Loading...</h1></center>;
  if (!student) return <center><h1>Not Found</h1></center>;
  const formatDob = (dobString) => {
  if (!dobString) return "";
  const date = new Date(dobString);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
};


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
              <strong>DOB:</strong> { student.dob ? formatDob(student.dob) : normalizedDob }
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
