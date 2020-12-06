import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "dngwoo",
      company: "Recursivesoft",
      theme: "dark",
      title: "Software Enginner",
      email: "dngwoo@gamil.com",
      message: "go for it",
      fileName: null,
      fileURL: null,
    },
    2: {
      id: "2",
      name: "dngwoo",
      company: "Recursivesoft",
      theme: "light",
      title: "Software Enginner",
      email: "dngwoo@gamil.com",
      message: "go for it",
      fileName: null,
      fileURL: "dngwoo.png",
    },
    3: {
      id: "3",
      name: "dngwoo",
      company: "Recursivesoft",
      theme: "colorful",
      title: "Software Enginner",
      email: "dngwoo@gamil.com",
      message: "go for it",
      fileName: null,
      fileURL: null,
    },
  });
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

  const createOrUpdateCard = (card) => {
    // 이전 상태 있는 것을 배경으로 해서 뭔가 값이 변경된 걸 업데이트 할 때는
    // 예전 값을 가져와서 변경해줘야 최신 state를 바꿀 수 있다.
    setCards((prevCards) => {
      const updated = { ...prevCards };
      // 배열을 쓰게 되면 cards의 갯수만큼 돌아야되기 때문에 object로 변환하여 바꿔준다.
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    // 이전 상태 있는 것을 배경으로 해서 뭔가 값이 변경된 걸 업데이트 할 때는
    // 예전 값을 가져와서 변경해줘야 최신 state를 바꿀 수 있다.
    setCards((prevCards) => {
      const updated = { ...prevCards };
      // 배열을 쓰게 되면 cards의 갯수만큼 돌아야되기 때문에 object로 변환하여 바꿔준다.
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
