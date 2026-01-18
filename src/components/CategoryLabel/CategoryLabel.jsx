import "./CategoryLabel.css";

function CategoryLabel({ category, className }) {
  
  return (
    <span className={`category-label ${className}`}>
      {category}
    </span>
  );

}

export default CategoryLabel;