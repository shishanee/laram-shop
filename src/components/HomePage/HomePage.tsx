import styles from './HomePage.module.css'
import photo from '../../../public/guys.png'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.blockOne}>
        <h1>L A R A M </h1>
        <p>Магазин брендовой одежды, не ограничивающий себя рамками каких-либо концепций</p>
      </div>
      <div className={styles.blockTwo}>
        <img src={photo} alt="" />
      </div>
    </div>
  )
}

export default HomePage