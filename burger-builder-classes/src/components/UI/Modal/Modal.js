import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ show, children }) => {
  return (
    <div
      className={styles.modal}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      {children}
    </div>
  );
};

export default Modal;