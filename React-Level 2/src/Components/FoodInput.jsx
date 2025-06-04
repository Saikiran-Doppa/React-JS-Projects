import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKey }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleOnKey}
    />
  );
};

export default FoodInput;
