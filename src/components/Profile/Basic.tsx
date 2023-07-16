import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/usersSlice";
import { AppDispatch, RootState } from "../../app/store";

const Basic = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className={styles.nameAndOrders}>
      {user.name ? (
        <div className={styles.welcome}>
          <h3>Здравствуйте, {user.name}</h3>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Basic;
