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
      fileURL: null,
    },
    {
      id: "2",
      name: "dngwoo",
      company: "Recursivesoft",
      theme: "light",
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
      theme: "colorful",
      title: "Software Enginner",
      email: "dngwoo@gamil.com",
      message: "go for it",
      fileName: "dngwoo",
      fileURL: null,
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

  const addCard = (card) => {
    // 불변성을 유지한다.
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
