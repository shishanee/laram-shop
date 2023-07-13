import React, { useState } from "react";
import styles from "./Cart.module.css";
import { Checkbox } from "antd";
import { fetchBuyCloths, setDelivery } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const InfoBlock = () => {
  const dispatch = useDispatch();

  const { delivery, cart } = useSelector((state) => state.cart);

  const [checkbox, setCheckbox] = useState(false);
  const [payment, setPayment] = useState(true);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleBuyCloths = () => {
    if (cart.cart.length > 0) {
      dispatch(fetchBuyCloths());
    }
  };

  return (
    <section className={styles.infoBlock}>
      <article className={styles.city}>
        <div className={styles.marginButton}>Ваш город</div>
        <input
          className={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </article>
      <article>
        <div className={styles.marginButton}>Способ доставки</div>
        <div className={styles.deliveryButtons}>
          <button
            onClick={() => dispatch(setDelivery(true))}
            className={delivery ? styles.focusButton : ""}
          >
            В магазин
          </button>
          <button
            onClick={() => dispatch(setDelivery(false))}
            className={!delivery ? styles.focusButton : ""}
          >
            До двери
          </button>
        </div>
      </article>
      <article>
        <div className={styles.marginButton}>Адрес</div>
        <input
          className={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </article>
      <article className={styles.recipientData}>
        <div className={`${styles.marginButton} ${styles.boldText}`}>
          Данные получателя
        </div>
        <label htmlFor="name">Имя и фамилия</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone">Телефон</label>
        <input
          className={styles.input}
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="email">Почта</label>
        <input
          className={styles.input}
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </article>
      <article>
        <div className={styles.marginButton}>Способы оплаты</div>
        <div className={styles.paymentButtons}>
          <button
            onClick={() => setPayment(true)}
            className={payment ? styles.focusButton : ""}
          >
            Картой на сайте
          </button>
          <button
            onClick={() => setPayment(false)}
            className={!payment ? styles.focusButton : ""}
          >
            Наличными курьеру
          </button>
        </div>
      </article>
      <article>
        <div className={styles.marginButton}>Комметарий к заказу</div>
        <input
          className={styles.input}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className={styles.checkbox}>
          <Checkbox onChange={() => setCheckbox(!checkbox)} />
          <div className={styles.agreeOffer}>
            Я соглашаюсь с условием оферты и политикой лояльности
          </div>
        </div>
      </article>
      <article className={styles.order}>
        <button
          className={checkbox ? styles.focusButton : styles.orderButtonDisabled}
          disabled={!checkbox}
          onClick={handleBuyCloths}
        >
          Заказать
        </button>
      </article>
    </section>
  );
};

export default InfoBlock;
