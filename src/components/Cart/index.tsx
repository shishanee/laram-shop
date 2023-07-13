import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import InfoBlock from "./InfoBlock";
import CartBlock from "./CartBlock";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/cartSlice";
import CartSkeleton from "./Skeleton";
import Total from "./Total";

const Cart = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.cart.status);
  const { cart } = useSelector((state) => state.cart.cart);

  const total = cart
    ? cart.reduce((accumulator, item) => {
        return accumulator + item.cloth.price * item.amount;
      }, 0)
    : "";

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  return (
    <div className={styles.main}>
      <InfoBlock />
      {status ? (
        <div>
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartBlock
              key={item._id}
              id={item.cloth._id}
              image={item.cloth.image[0].path}
              name={item.cloth.name}
              size={item.size}
              amount={item.amount}
              price={item.cloth.price}
              collection={item.cloth.collections.name}
            />
          ))}
          <Total total={total} />
        </div>
      )}
    </div>
  );
};

export default Cart;
