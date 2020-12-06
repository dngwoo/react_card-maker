import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard, updateCard, deleteCard, FileInput }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        card={cards[key]}
        key={key}
        updateCard={updateCard}
        deleteCard={deleteCard}
        FileInput={FileInput}
      />
    ))}
    <CardAddForm onAdd={addCard} FileInput={FileInput} />
  </section>
);

export default Editor;
