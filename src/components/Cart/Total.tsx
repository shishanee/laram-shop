import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

const Total = ({ total }) => {
  const delivery = useSelector((state) => state.cart.delivery);

  return (
    <section>
      <article className={styles.total}>
        <div className={styles.flex}>
          <span>Сумма:</span>
          <span>{total}</span>
        </div>
        <div className={styles.flex}>
          <span>Доставка:</span>
          <span>{delivery ? "0 ₽" : "500 ₽"}</span>
        </div>
        <div className={styles.flex}>
          <span className={styles.boldText}>Итог:</span>
          <span className={styles.boldText}>{delivery ? total : total + 500}</span>
        </div>
      </article>
    </section>
  );
};

export default Total;
