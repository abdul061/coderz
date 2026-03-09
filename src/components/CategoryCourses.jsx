import { useParams } from "react-router-dom";
import { courses } from "../data/coursesData";
import CourseCard from "../components/CourseCard";

const CategoryCourses = () => {

  const { category } = useParams();

  const filteredCourses = courses.filter(
    (course) => course.category === category
  );

  return (
   <div className="courses-page">
    <div className="courses-grid">

      {filteredCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          variant="course"
        />
      ))}

    </div>
    </div>    
  );
};

export default CategoryCourses;