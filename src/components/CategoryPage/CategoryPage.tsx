import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneCategory } from "../../features/clothesSlice";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CategoryPage.module.css";
const OneCategory = () => {
  const category = useSelector((state) => state.clothes.category);

  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(oneCategory(id));
  }, []);

  const navigate = useNavigate();

  const handleNavigateClick = (id) => {
    navigate(`/oneClothes/${id}`);
  };
  return (
    <div>
      <div className={styles.allClothes}>
        {category.map((item) => {
          return (
            <div
              onClick={() => handleNavigateClick(item._id)}
              className={styles.oneClothes}
            >
              <div className={styles.image}>
                <img
                  src={`http://localhost:4000/${item.image[0]?.path}`}
                  alt=""
                />
              </div>
              <h5>{item.name}</h5>
              <h4>{item.price}₽</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OneCategory;
