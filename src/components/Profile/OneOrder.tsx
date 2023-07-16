import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../features/ordersSlice";
import { AppDispatch, RootState } from "../../app/store";
import styles from "./Profile.module.css";
const OneOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const order = useSelector((state: RootState) => state.orders.order);

  useEffect(() => {
    dispatch(getOrderById(id));
  }, []);
  console.log(order);

  return (
    <div className={styles.paddingTop}>
      <div className={`${styles.bigText} ${styles.marginBottom}`}>
        Заказ №{order.orderNumber}
      </div>
      {order._id ? (
        <div className={styles.flex}>
          <div>
            <div className={styles.bigText}>ФИО: {order.name}</div>
            <div className={styles.bigText}>Номер телефона: {order.phone}</div>
            <div className={styles.bigText}>Почта: {order.email}</div>
            <div className={styles.bigText}>
              Адрес: {order.city},{order.address}
            </div>
            <div className={styles.bigText}>
              Комментарий к заказу: {order.comment}
            </div>
          </div>
          <div >
          {order.products.map((item) => (
            <div key={item._id} className={`${styles.clothFlex} ${styles.flex}`}>
              <img
                src={`http://localhost:4000/${item.cloth.image[0].path}`}
                alt="cloth"
              />
              <div>
                <div>{item.cloth.name}</div>
                <div>Количество: {item.amount}</div>
                <div>Размер: {item.size}</div>
                <div>{item.cloth.price} ₽</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default OneOrder;
