import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './CollectionPage.module.css'

const CollectionPage = ({theme, setTheme}) => {
  const clothes = useSelector((state) => state.clothes.clothes);
  const id = useParams().id;

  return (
    <div className={theme ? styles.collectionBack : styles.collectionBackDark}>
      {clothes.map((item) => {
        if (item.collections._id === id) {
          return <div>{item.name}</div>;
        }
      })}
    </div>
  );
};

export default CollectionPage;
