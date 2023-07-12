import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../features/ordersSlice";

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch])
    const orders = useSelector((state) => state.orders.orders)
    console.log(orders);
    
  // const user = useSelector((state) => state.users.user)
  return (
    <div>
      <div className={styles.profileSide}> Аккаунт - Основное</div>
      <div className={styles.mainProfile}>
        <div className={styles.sideBar}>
          <div className={styles.side}>
            <Link to={"/personal"}>Основное</Link>
            <Link to={"/dannie"}>Данные</Link>
            <Link to={"/orders"}>История заказов</Link>
            <Link to={"/exit"}>Выйти</Link>
          </div>
        </div>
            {orders.map((item) => {
                return (
                    <div>
                    <div> Номер заказа: {item.number}</div>
                   <div>{item.products.map((product) => {
                    return (
                        <div>
                        <div>Заказ: {product.product.name}</div>
                        <div>Количество: {product.quantity}</div>
                        </div>
                    )
                   } )}</div>
                    <div>Дата заказа: {item.date}</div>
                    <div>Сумма: {item.total}</div>
                    <div>Статус: {item.status}</div>
                    </div>
                )
            })}
        <div>
          <h3>Здравствуйте, Абдуррахман</h3>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

