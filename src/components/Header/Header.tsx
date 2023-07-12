import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAllAcces,
  getAllCategories,
  getAllCollections,
} from "../../features/catalogSlice";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import {
  getClothes,
  oneAccessory,
  oneCategory,
  oneCollection,
} from "../../features/clothesSlice";
import sun from "../../../public/sun4.png";
import moon from "../../../public/moon4.png";

const Header = ({ theme, setTheme }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCollection, setIsOpenCollection] = useState(false);
  const [isOpenAccessory, setIsOpenAccessory] = useState(false);
  const token = useSelector((state) => state.application.token);

  const categories = useSelector((state) => state.catalog.categories);
  const collections = useSelector((state) => state.catalog.collections);
  const acces = useSelector((state) => state.catalog.acces);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllCollections());
    dispatch(getClothes());
    dispatch(getAllAcces());
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
    if (isOpenCategory || isOpenCollection) {
      setIsOpenCategory(false);
      setIsOpenCollection(false);
    }
    setIsOpenAccessory(!isOpenAccessory);
  }

  const navigate = useNavigate();
  function handleNavigateCategories(id) {
    navigate(`category/${id}`);
    dispatch(oneCategory(id));

    setIsOpenCategory(false);
    setIsOpenCollection(false);
    setIsOpenAccessory(false);
  }
  function handleNavigateCollections(id) {
    navigate(`collection/${id}`);
    dispatch(oneCollection(id));
    setIsOpenCategory(false);
    setIsOpenCollection(false);
    setIsOpenAccessory(false);
  }

  function handleTheme() {
    setTheme(!theme);
  }

  function handleNavigateAcces(id) {
    dispatch(oneAccessory(id));
    navigate(`accessory/${id}`);
    setIsOpenCategory(false);
    setIsOpenCollection(false);
    setIsOpenAccessory(false);
  }
  return (
    <div className={theme ? styles.header : (styles.header, styles.headerDark)}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <h1>L A R A M</h1>
        </Link>
      </div>
      <div className={styles.headerCenter}>
        <button onClick={handleCollection} className={styles.headerBar}>
          КОЛЛЕКЦИИ
        </button>
        <button onClick={handleCategory} className={styles.headerBar}>
          КАТЕГОРИИ
        </button>
        <button onClick={handleAccessory} className={styles.headerBar}>
          АКСЕССУАРЫ
        </button>
        <button className={styles.headerBar}>SALE</button>
      </div>
      <div className={styles.headerRight}>
        <Link to="/cart">КОРЗИНА</Link>
        {!token ? (
          <Link to={"/account"}>АККАУНТ</Link>
        ) : (
          <Link to={"/profile"}>ПРОФИЛЬ</Link>
        )}
        <button
          className={theme ? styles.themeButton : styles.themeButtonDark}
          onClick={handleTheme}
        >
          <div id={styles.slider}>
            <img src={theme ? sun : moon} alt="sun || moon" />
          </div>
        </button>
      </div>

      {isOpenCategory && (
        <div className={styles.categoriesList}>
          <div className={styles.list}>
            <p>КАТЕГОРИИ</p>
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
      {isOpenAccessory && (
        <div className={styles.accesList}>
          <div className={styles.list}>
            <p>АКСЕССУАРЫ</p>
            <div className={styles.catalogBlock}>
              {acces.map((item) => {
                return (
                  <div className={styles.listName}>
                    <button onClick={() => handleNavigateAcces(item._id)}>
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
