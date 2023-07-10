import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../features/clothesSlice";
import styles from "./Clothes.module.css";

const Clothes = () => {
  const clothes = useSelector((state) => state.clothes.clothes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
  }, []);
  return (
    <div className={styles.allClothes}>
      {clothes.map((item) => {
        return (
          <div className={styles.oneClothes}>
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
