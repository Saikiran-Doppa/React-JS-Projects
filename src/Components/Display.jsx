import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      value={displayValue}
      readOnly
      className={styles.inputDisplay}
    />
  );
};

export default Display;
