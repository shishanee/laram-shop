import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneClothes } from "../../features/clothesSlice";
import styles from "./OneClothes.module.css";
import size from "../../../public/Screenshot_2021-02-1.png";
import SizeTable from "../SizeTable/SizeTable";
import { addCloth } from "../../features/cartSlice";

const OneClothes = () => {
  type AppState = {
    application: {
      token: string;
    };
  };
  const token: string = useSelector(
    (state: AppState) => state.application.token
  );
  const loading = useSelector((state) => state.clothes.loading);

  const [activeModal, setActiveModal] = useState(false);
  const [sizeIndex, setSizeIndex] = useState<number | null>(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneClothes(id));
  }, []);

  const [img, setImg] = useState();

  const oneClothe = useSelector((state) => state.clothes.oneClothes);
  const imageSet = (path) => {
    setImg(path);
  };

  const haveAccsessory = oneClothe.accessory ? true : false;

  useEffect(() => {
    if (haveAccsessory) {
      return setSizeIndex(0);
    }
    setSizeIndex(null);
  }, [haveAccsessory]);

  const handleActive = () => {
    setActiveModal(true);
  };

  const handleAddCloth = () => {
    if (typeof sizeIndex === "number") {
      const size = oneClothe.size[sizeIndex].size;
      dispatch(addCloth({ id, size }));
    }
  };

  return (
    <div className={styles.oneClotheMain}>
      {activeModal && (
        <SizeTable active={activeModal} setActive={setActiveModal} />
      )}
      {!loading && (
        <div className={styles.allImages}>
          {oneClothe.image.map((item) => {
            return (
              <img
                key={item.filename}
                onClick={() => imageSet(item.path)}
                src={`http://localhost:4000/${item.path}`}
                alt=""
              />
            );
          })}
        </div>
      )}
      {!loading && (
        <div className={styles.imageBlock}>
          <img
            src={`http://localhost:4000/${
              !img ? oneClothe.image[0].path : img
            }`}
            alt=""
          />
        </div>
      )}
      <div className={styles.textBlock}>
        <h1>{oneClothe.name}</h1>
        <h4>{oneClothe.price} ₽</h4>
        <div className={styles.sizeBlock}>
          <h3>Размер:</h3>
          {!loading && (
            <div className={styles.sizes}>
              {oneClothe.size.map((item, index) => {
                return (
                  <button
                    key={item._id}
                    disabled={item.inStock <= 0 ? true : false}
                    className={`${
                      index === sizeIndex ? styles.focusSize : ""
                    } ${item.inStock <= 0 ? styles.disabled : ""}`}
                    onClick={() => setSizeIndex(index)}
                  >
                    {item.size}
                  </button>
                );
              })}
            </div>
          )}
          <div>
            <button onClick={handleActive} className={styles.table}>
              <img src={size} alt="" /> <h4>Таблица Размеров</h4>
            </button>
          </div>
        </div>
        {token && (
          <button className={styles.addCart} onClick={handleAddCloth}>
            Добавить в корзину
          </button>
        )}
        <div className={styles.description}>
          <h3>Описание</h3>
          <p>{oneClothe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OneClothes;
