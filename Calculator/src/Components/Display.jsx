import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      readOnly
      className={styles.inputDisplay}
      value={displayValue}
    />
  );
};

export default Display;
