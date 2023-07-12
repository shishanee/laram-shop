import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneClothes } from "../../features/clothesSlice";
import styles from "./OneClothes.module.css";
import size from "../../../public/Screenshot_2021-02-1.png";
import SizeTable from "../SizeTable/SizeTable";

const OneClothes = () => {
  const loading = useSelector((state) => state.clothes.loading);
  const [activeModal,setActiveModal] = useState(false)

  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneClothes(id));
  }, []);

  const [img, setImg] = useState();

  const oneClothe = useSelector((state) => state.clothes.oneClothes);
  const imageSet = (path) => {
    setImg(path);
  };

  const handleActive = () => {
    setActiveModal(true)
  }

  return (
    <div className={styles.oneClotheMain}>
    {activeModal && <SizeTable active={activeModal} setActive={setActiveModal}/>}
      {!loading && (
        <div className={styles.allImages}>
          {oneClothe.image.map((item) => {
            return (
              <img
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
       {!oneClothe.accessory && <div className={styles.sizeBlock}>
          <h3>Размер:</h3>
          {!loading &&  (
            <div className={styles.sizes}>
              {oneClothe.size.map((item) => {
                return <button>{item.size}</button>;
              })}
            </div>
          )}
          <div>
            <button onClick={handleActive} className={styles.table}>
              <img src={size} alt="" /> <h4>Таблица Размеров</h4>
            </button>
          </div>
        </div>}
          <button className={styles.addCart}>Добавить в корзину</button>
          <div className={styles.description}>
            <h3>Описание</h3>
            <p>{oneClothe.description}</p>
          </div>
      </div>
    </div>
  );
};

export default OneClothes;
