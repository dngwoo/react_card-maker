import React from "react";
import Button from "../button/button.jsx";
import styles from "./card_editor.module.css";

const CardEditForm = ({ card, updateCard, deleteCard, FileInput }) => {
  const {
    name, //
    company,
    title,
    email,
    message,
    theme,
    fileName,
  } = card;

  // onChange처럼 event.currentTarget.value로 파일을 받아올 수 없기 떄문에 따로 함수 만듬
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    console.log(event.currentTarget);
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      // set dynamic property key - es6 way
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        name="message"
        value={message}
        className={styles.textarea}
        onChange={onChange}
      />
      <div className={styles["file-input"]}>
        <FileInput onFileChange={onFileChange} name={fileName} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
