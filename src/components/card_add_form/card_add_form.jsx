import React, { useRef } from "react";
import ImageFileInput from "../image_file_input/image_file_input.jsx";
import Button from "../button/button.jsx";
import styles from "./card_add.module.css";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid를 활용하는 것도 좋음
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset(); // form 초기화
    onAdd(card); // Preview에 카드추가
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        placeholder="Company"
      />
      <select
        className={styles.select}
        name="theme"
        ref={themeRef}
        value="light"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        placeholder="Email"
      />
      <textarea
        name="message"
        ref={messageRef}
        placeholder="Message"
        className={styles.textarea}
      />
      <div className={styles["file-input"]}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
