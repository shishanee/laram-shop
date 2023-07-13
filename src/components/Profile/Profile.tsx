import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../features/ordersSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  const orders = useSelector((state) => state.orders.orders);

  // const user = useSelector((state) => state.users.user)
  return (
    <div>
      <p className={styles.p}>Аккаунт  —  Основное</p>
      <div className={styles.profile}>
        <div className={styles.profileMain}>
          <div className={styles.profileSide}>
            <div className={styles.side}>
              <Link className={styles.linkk} to={"/profile"}>Основное</Link>
              <Link className={styles.linkk} to={"/dannie"}>Данные</Link>
              <Link className={styles.linkk} to={"/orders"}>История заказов</Link>
              <Link className={styles.linkk} to={"/exit"}>Выйти</Link>
            </div>
          </div>

          <table>
            <thead>
              <tr className={styles.firstTr}>
                <td>Номер </td>
                <td>Заказ</td>
                {/* <td>Количество</td> */}
                <td>Дата заказа</td>
                <td>Сумма</td>
                <td>Статус</td>
              </tr>
            </thead>
            {orders.map((item) => {
              return (
                <tbody>
                  <tr className={styles.bb}>
                    <td> {item.number}</td>
                    {item.products.map((products) => {
                      return (
                        <>
                          <div className={styles.orderName}>
                            {" "}
                            {products.product.name.split(" ")[0]}{" "}
                            {products.quantity} шт{" "}
                          </div>
                          {/* <td className={styles.orderAmount}> </td> */}
                        </>
                      );
                    })}
                    <td>{item.date.split("T")[0]}</td>
                    <td>{item.total} ₽</td>
                    <td>{item.status}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>

            <div>
              <h3>Здравствуйте, Абдуррахман</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
