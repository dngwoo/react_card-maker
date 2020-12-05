import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "dngwoo",
      company: "Recursivesoft",
      theme: "dark",
      title: "Software Enginner",
      email: "dngwoo@gamil.com",
      message: "go for it",
      fileName: "dngwoo",
      fileURL: "dngwoo.png",
    },
    {
      id: "2",
      name: "dngwoo",
      company: "Recursivesoft",
      theme: "dark",
      title: "Software Enginner",
      email: "dngwoo@gamil.com",
      message: "go for it",
      fileName: "dngwoo",
      fileURL: "dngwoo.png",
    },
    {
      id: "3",
      name: "dngwoo",
      company: "Recursivesoft",
      theme: "dark",
      title: "Software Enginner",
      email: "dngwoo@gamil.com",
      message: "go for it",
      fileName: "dngwoo",
      fileURL: "dngwoo.png",
    },
  ]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
