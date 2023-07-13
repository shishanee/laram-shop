import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

const CartBlock = ({
  image,
  name,
  collections,
  size,
  color,
  amount,
  price,
}) => {
  console.log(image);
  
  return (
    <section className={styles.cartBlock}>
      <article className={styles.cloth}>
        <img src={`http://localhost:4000/${image}`} alt="cloth" />
        <div className={styles.clothInfo}>
          <div>{name}</div>
          <div className={styles.grayColor}>
            Коллекция: <span className={styles.paddingHorizontal}>{collections}</span>
          </div>
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
            <div
              className={`${styles.characteristic} ${styles.paddingHorizontal}`}
            >
              Цвет:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                ъуъ
              </span>
            </div>
            <div className={styles.characteristic}>
              Количество:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                <span className={styles.cursorPointer}>-</span>
                <span className={styles.paddingHorizontal}>{amount}</span>
                <span className={styles.cursorPointer}>+</span>
              </span>
            </div>
          </div>
          <div className={styles.flex}>
            <span>
              Цена:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                {price}
              </span>
            </span>
            <span className={styles.grayColor}>Удалить</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CartBlock;
