import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../features/clothesSlice";
import styles from "./Clothes.module.css";
import { useNavigate } from "react-router-dom";

const Clothes = () => {
  const clothes = useSelector((state) => state.clothes.clothes);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigateClick = (id) => {
    navigate(`/oneClothes/${id}`);
  };

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  return (
    <div className={styles.allClothes}>
      {clothes.map((item) => {
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
  );
};

export default Clothes;
