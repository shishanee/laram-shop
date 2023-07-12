import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { oneAccessory } from "../../features/clothesSlice";
import styles from "./Accessory.module.css";

const AccessoryPage = () => {
  const accessory = useSelector((state) => state.clothes.accessory);

  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(oneAccessory(id));
  }, []);

 const navigate = useNavigate();

  const handleNavigateClick = (id) => {
    navigate(`/oneClothes/${id}`);
  };

  return (
    <div className={styles.allClothes}>
      {accessory.map((item) => {
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

export default AccessoryPage;
