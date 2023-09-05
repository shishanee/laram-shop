import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../features/ordersSlice";
import SideBar from "./SideBar";

const HistoryOfOrders:React.FC = ():JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div className={styles.paddingTop}>
      <p className={styles.p}>Аккаунт — Данные</p>
      <div className={styles.flex}>
        <SideBar />
        {orders[0] ? (
          <div>
            <div>
              <p>Ваши недавние заказы:</p>
            </div>
            <table>
              <thead>
                <tr className={styles.firstTr}>
                  <td>Номер </td>
                  <td>Дата заказа</td>
                  <td>Сумма</td>
                  <td>Статус</td>
                </tr>
              </thead>
              {orders.map((item) => {
                return (
                  <tbody>
                    <tr className={styles.bb}>
                      <td> {item.orderNumber}</td>
                      <td>{item.date.split("T")[0]}</td>
                      <td>{item.total} ₽</td>
                      <td>{item.status}</td>
                      <td>
                        <Link
                          to={`/order/${item._id}`}
                          className={styles.orderDetails}
                        >
                          Детали заказа
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        ) : (
          <div className={styles.emptyCartBlock}>
            <div>
              <p> У вас нет недавних заказов </p>
              <img
                src="https://a.lmcdn.ru/static/23.07.12/assets/d-cart.c259d025.svg"
                alt="emptyCart"
              />
            </div>
            <div className={styles.butText}>
              <p className={styles.textCart}>
                Чтобы сделать заказ, перейдите в каталог и добавьте вещи в
                корзину
              </p>
              <Link to="/">
                <button className={styles.catalogBut}>Перейти в каталог</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryOfOrders;
