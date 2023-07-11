import styles from "./SizeTable.module.css";
import sizes from "../../../public/tablesize.png";

const SizeTable = ({ active, setActive }) => {

const handleActive = () => {
  setActive(false)
}
  return (
    <div>
      <div className={styles.modalContent}>
        <img src={sizes} alt="" />
        <button  onClick={handleActive} className={styles.offButton}>
          X
        </button>
      </div>
    </div>
  );
};

export default SizeTable;
