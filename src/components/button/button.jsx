import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}></button>
);

export default Button;
