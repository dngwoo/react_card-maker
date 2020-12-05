import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId }, // 값을 같이 전달하고 싶을때 이렇게 사용한다.
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid)); // 여기 반환값에 user안에 uid라는 것이 있는데 unique id를 의미한다. db에 사용한다.
  };

  useEffect(() => {
    // 로그인 상태라면 goToMaker를 활용하여 /maker로 보낸다.
    authService.onAuthChange((user) => {
      user && goToMaker(user.id); // user.id는 uid와 같다.
    });
  });
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
