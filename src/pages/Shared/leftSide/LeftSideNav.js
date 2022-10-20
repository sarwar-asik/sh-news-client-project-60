import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="text-center">Total Category{categories.length}</h1>
      <div className="">
        {categories.map((category) => (
          <div className=" rounded p-1 text-center text-light">
            <h5>{category.name}</h5>

            <Link
              to={`/category/:id/${category.id}`}
              className="text-decoration-none fs-1"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
