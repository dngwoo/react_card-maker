import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const onButtonClick = (event) => {
    // input을 css 먹이는 건 좀 힘들기 때문에 button으로 대체한다.
    event.preventDefault(); // 버튼을 누를 시 리프레쉬 되는 것을 막는다.
    fileInputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
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
      {!loading && (
        // 참고: classNames라는 라이브러리로 클래스 이름을 쉽게 만들 수 있음.
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
