import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryPage = ({theme, setTheme}) => {
  const clothes = useSelector((state) => state.clothes.clothes);
  const id = useParams().id;

  return (
    <div className={theme ? styles.categoryBack : styles.categoryBackDark}>
      {clothes.map((item) => {
        if (item.category._id === id) {
          return <div>{item.name}</div>;
        }
      })}
    </div>
  );
};

export default CategoryPage;
