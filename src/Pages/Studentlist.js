// StudentList.js
import { Link } from "react-router-dom";

function StudentList({ students }) {
  return (
    <div>
      {students.map((student) => {
        const dobFormatted = new Date(student.dob)
          .toISOString()
          .split("T")[0]
          .replace(/-/g, ""); // 20041006

        return (
          <div key={student.rollNo}>
            <Link to={`/student/${student.rollNo}-${dobFormatted}`}>
              {student.name} ({student.rollNo})
            </Link>
          </div>
        );
      })}
    </div>
  );
}
