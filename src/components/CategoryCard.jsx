import { Link } from "react-router-dom";
import'../css/Categorycard.css'

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">

      <div className="category-icon">
        <img src={category.icon} alt={category.title} />
      </div>

      <h3>{category.title}</h3>

      <p>{category.description}</p>

      <div className="tech-icons">
        {category.tools.map((tool, index) => (
          <span key={index} className="tool">
            {tool}
          </span>
        ))}
      </div>

      <Link to={`/courses/${category.slug}`} className="explore-btn">
        Explore Programs →
      </Link>

    </div>
  );
};

export default CategoryCard;