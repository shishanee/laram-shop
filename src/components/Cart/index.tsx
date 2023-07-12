import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import InfoBlock from "./InfoBlock";
import CartBlock from "./CartBlock";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/cartSlice";
import CartSkeleton from "./Skeleton";

const Cart = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.cart.status);
  const { cart } = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  return (
    <div className={styles.main}>
      <InfoBlock />
      {status ? (
        <CartSkeleton />
      ) : (
        <div>
          {cart.map((item) => (
            <CartBlock
              key={item._id}
              image={item.cloth.image[0].path}
              name={item.cloth.name}
              size={item.size}
              amount={item.amount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
