import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../features/ordersSlice";
import { fetchUser } from "../../features/usersSlice";
import { getUserCart } from "../../features/cartSlice";

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserOrders());
        dispatch(fetchUser());
        dispatch(getUserCart())
    }, [dispatch]);
    
    const orders = useSelector((state) => state.orders.orders);
    const user = useSelector((state) => state.user.user);
    const userOrders = orders.filter((item) => item.customer === user._id);
//   const {userId} = useSelector((state) => state.cart.cart);
  const cart = useSelector((state) => state.cart.cart);
  const cartOrders = []
  if (cart.userId === user._id) {
    cartOrders.push(cart.cart)
  }
  console.log(cartOrders);
  
  const navigate = useNavigate();
  const handleCatalog = () => {
    navigate("/")
  }

  console.log(user._id);
  console.log(cart.userId);
  
  

  return (
    <div className={styles.profile}>
      <div className={styles.profileSide}>
        <p className={styles.p}>Аккаунт — Основное</p>

        <div className={styles.side}>
          <Link className={styles.linkk1} to={"/profile"}>
            Основное
          </Link>
          <Link className={styles.linkk} to={"/dannie"}>
            Данные
          </Link>
          <Link className={styles.linkk} to={"/orders"}>
            История заказов
          </Link>
          <Link className={styles.linkk} to={"/exit"}>
            Выйти
          </Link>
        </div>
      </div>
      <div className={styles.nameAndOrders}>
        <div className={styles.welcome}>
          <h3>Здравствуйте, {user.name}</h3>
        </div>

        {userOrders[0] ? (
            <div>
        <div>
          <p>Ваши недавние заказы:</p>
        </div>
          <table>
            <thead>
              <tr className={styles.firstTr}>
                <td>Номер </td>
                <td>Заказ</td>
                <td>Дата заказа</td>
                <td>Сумма</td>
                <td>Статус</td>
              </tr>
            </thead>
            {userOrders.map((item) => {
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
              Чтобы сделать заказ, перейдите в каталог и добавьте вещи в корзину
            </p>
            <button onClick={handleCatalog} className={styles.catalogBut}>Перейти в каталог</button>
            </div>
          </div>
        )}
      </div>
    </div>
    

    // </div>
  );
};

export default Profile;
