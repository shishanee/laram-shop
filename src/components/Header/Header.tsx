import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllCollections,
} from "../../features/catalogSlice";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as React from "react";

const Header = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCollection, setIsOpenCollection] = useState(false);
  const [isOpenAccessory, setIsOpenAccessory] = useState(false);

  const categories = useSelector((state) => state.catalog.categories);
  const collections = useSelector((state) => state.catalog.collections);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllCollections());
  }, []);

  function handleCollection() {
    if (isOpenCategory || isOpenAccessory) {
      setIsOpenCategory(false);
      setIsOpenAccessory(false);
    }
    setIsOpenCollection(!isOpenCollection);
  }
  function handleCategory() {
    if (isOpenCollection || isOpenAccessory) {
      setIsOpenCollection(false);
      setIsOpenAccessory(false);
    }
    setIsOpenCategory(!isOpenCategory);
  }
  function handleAccessory() {
    if (isOpenCategory && isOpenCollection) {
      setIsOpenCategory(false);
      setIsOpenCollection(false);
    }
    setIsOpenAccessory(!isOpenAccessory);
  }
  // function handleBlur () {
  //   setIsOpenCategory(false);
  //   setIsOpenCollection(false);
  //   setIsOpenAccessory(false);
  // }

  const navigate = useNavigate();
  function handleNavigateCategories(id) {
    navigate(`category/${id}`);
    setIsOpenCategory(false);
    setIsOpenCollection(false);
    setIsOpenAccessory(false);
  }
  function handleNavigateCollections (id) {
    navigate(`collection/${id}`);
    setIsOpenCategory(false);
    setIsOpenCollection(false);
    setIsOpenAccessory(false);
  }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>L A R A M</h1>
      </div>
      <div className={styles.headerCenter}>
        <button 
          onClick={handleCollection} className={styles.headerBar}
          // onBlur={handleBlur}
          >
          КОЛЛЕКЦИИ
        </button>
        <button 
          onClick={handleCategory} className={styles.headerBar}
          // onBlur={handleBlur}
          >
          КАТЕГОРИИ
        </button>
        <button 
          onClick={handleAccessory} className={styles.headerBar}
          // onBlur={handleBlur}
          >
          АКСЕССУАРЫ
        </button>
        <button className={styles.headerBar}>SALE</button>
      </div>
      <div className={styles.headerRight}>
        <Link>КОРЗИНА</Link>
        <Link>АККАУНТ</Link>
      </div>

      {isOpenCategory && (
        <div className={styles.categoriesList}>
          <div className={styles.list}>
            <p>КОЛЛЕКЦИИ</p>
            <div className={styles.catalogBlock}>
              {categories.map((item) => {
                return (
                  <div className={styles.listName}>
                    <button onClick={() => handleNavigateCategories(item._id)}>
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {isOpenCollection && (
        <div className={styles.collectionsList}>
          <div className={styles.list}>
            <p>КОЛЛЕКЦИИ</p>
            <div className={styles.catalogBlock}>
              {collections.map((item) => {
                return (
                  <div className={styles.listName}>
                    <button onClick={() => handleNavigateCollections(item._id)}>
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* {isOpenAccessory && (
        <div className={styles.collectionsList}>
          <div className={styles.list}>
            <p>КОЛЛЕКЦИИ</p>
            <div className={styles.catalogBlock}>
              {accessories.map((item) => {
                return (
                  <div className={styles.listName}>
                    <button onClick={() => handleNavigate(item._id)}>
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Header;
