import styles from "./ErrorMsg.module.css";

const ErrorMsg = ({ foodItems }) => {
  return (
    <>
      {foodItems.length === 0 && (
        <h3 className={styles.errorMsg}>Food is Empty</h3>
      )}
    </>
  );
};

export default ErrorMsg;
