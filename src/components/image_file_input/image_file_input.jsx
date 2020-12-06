import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const fileInputRef = useRef();

  const onButtonClick = (event) => {
    // input을 css 먹이는 건 좀 힘들기 때문에 button으로 대체한다.
    event.preventDefault(); // 버튼을 누를 시 리프레쉬 되는 것을 막는다.
    fileInputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        accept="image/*"
        name="file"
        type="file"
        onChange={onChange}
        ref={fileInputRef}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
