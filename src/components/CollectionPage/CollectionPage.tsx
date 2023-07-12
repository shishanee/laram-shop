import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneCollection } from "../../features/clothesSlice";
import styles from "./CollectionPage.module.css";

const OneCategory = () => {
  const collection = useSelector((state) => state.clothes.collection);

  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(oneCollection(id));
  }, []);

  return (
    <div className={styles.allClothes}>
      {collection.map((item) => {
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

export default OneCategory;
