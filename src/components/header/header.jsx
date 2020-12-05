import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  // 로그아웃 함수가 props로 내려온다면 header에 logout button 생성
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
