import styles from "./Item.module.css";

const Item = ({ item, handleBuyButton }) => {
  return (
    <li className="list-group-item">
      <span className={styles.items}>{item}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
