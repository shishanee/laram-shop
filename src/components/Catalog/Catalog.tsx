import { useEffect } from "react";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllCategories, getAllCollections } from "../../features/catalogSlice";
import styles from './Catalog.module.css'

export default function Catalog() {
  const categories = useSelector(state => state.catalog.categories)
  const collections = useSelector(state => state.catalog.collections)

  // console.log(categories);
  // console.log(collections);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getAllCollections())
  },[])
  
  
  return (
    <div className={styles.catalogList}>

      <div className={styles.collectionsList, styles.list}>
        <p>КОЛЛЕКЦИИ</p>
        <div className={styles.catalogBlock}>{collections.map(item => {
          return <div className={styles.listName}>{item.name}</div>
        })}</div>
      </div>

      <div className={styles.categoriesList, styles.list}>
        <p>ОДЕЖДА</p>
        <div className={styles.catalogBlock}>{categories.map(item => {
          return <div className={styles.listName}>{item.name}</div>
        })}</div>
      </div>

      <div className={styles.accessoriesList, styles.list}>
        <p>АКСЕССУАРЫ</p>
        <div className={styles.catalogBlock}>444</div>
      </div>
      
    </div>
  )
}