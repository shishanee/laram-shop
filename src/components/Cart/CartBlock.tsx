import React from "react";
import styles from "./Cart.module.css";
import { useDispatch } from "react-redux";
import {
  fetchMinusCloth,
  fetchPlusCloth,
  fetchRemoveCloth,
} from "../../features/cartSlice";

const CartBlock = ({ id, image, name, collection, size, amount, price }) => {
  const dispatch = useDispatch();

  const plusCloth = (id) => {
    dispatch(fetchPlusCloth({ id, size }));
  };

  const minusCloth = (id) => {
    dispatch(fetchMinusCloth({ id, size }));
  };

  const removeCloth = (id) => {
    dispatch(fetchRemoveCloth({ id, size }));
  };

  return (
    <section className={styles.cartBlock}>
      <article className={styles.cloth}>
        <img src={`http://localhost:4000/${image}`} alt="cloth" />
        <div className={styles.clothInfo}>
          <div>{name}</div>
          {collection ? (
            <div className={styles.grayColor}>
              Коллекция:
              <span className={styles.paddingHorizontal}>{collection}</span>
            </div>
          ) : (
            ""
          )}
          <div
            className={`${styles.characteristics} ${styles.marginVertically}`}
          >
            <div className={styles.characteristic}>
              Размер:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                {size}
              </span>
            </div>

            <div className={styles.characteristic}>
              Количество:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                <span
                  className={styles.cursorPointer}
                  onClick={() => minusCloth(id)}
                >
                  -
                </span>
                <span className={styles.paddingHorizontal}>{amount}</span>
                <span
                  className={styles.cursorPointer}
                  onClick={() => plusCloth(id)}
                >
                  +
                </span>
              </span>
            </div>
          </div>
          <div className={styles.flex}>
            <span>
              Цена:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                {price} ₽
              </span>
            </span>
            <span
              className={`${styles.grayColor} ${styles.deleteButton}`}
              onClick={() => removeCloth(id)}
            >
              Удалить
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CartBlock;
