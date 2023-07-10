import React from "react";
import styles from "./Cart.module.css";
const Cart = () => {
  return (
    <div className={styles.CartBlock}>
      <section className={styles.infoBlock}>
        <article>
          <label htmlFor="city">Ваш город</label>
          <input type="text" id="city"/>
        </article>
      </section>
    </div>
  );
};

export default Cart;
