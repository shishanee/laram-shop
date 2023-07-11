import React from "react";
import styles from "./Cart.module.css";

const CartBlock = () => {
  return (
    <section className={styles.cartBlock}>
      <article className={styles.cloth}>
        <div className={styles.image} />
        <div className={styles.clothInfo}>
          <div>Пиджак KLS</div>
          <div className={styles.grayColor}>
            Коллекция: <span className={styles.paddingHorizontal}>Зима</span>
          </div>
          <div
            className={`${styles.characteristics} ${styles.marginVertically}`}
          >
            <div className={styles.characteristic}>
              Размер:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                M
              </span>
            </div>
            <div
              className={`${styles.characteristic} ${styles.paddingHorizontal}`}
            >
              Цвет:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                Белый
              </span>
            </div>
            <div className={styles.characteristic}>
              Количество:
              <span
                className={`${styles.boldText} ${styles.paddingHorizontal}`}
              >
                <span className={styles.cursorPointer}>-</span>
                <span className={styles.paddingHorizontal}>4</span>
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
                10 500 ₽
              </span>
            </span>
            <span className={styles.grayColor}>Удалить</span>
          </div>
        </div>
      </article>
      <article className={styles.total}>
        <div className={styles.flex}>
          <span>Сумма:</span>
          <span>24 500 ₽</span>
        </div>
        <div className={styles.flex}>
          <span>Доставка:</span>
          <span>0 ₽</span>
        </div>
        <div className={styles.flex}>
          <span className={styles.boldText}>Итог:</span>
          <span className={styles.boldText}>24 500 ₽</span>
        </div>
      </article>
    </section>
  );
};

export default CartBlock;
