import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();

// 확장성을 위해 props를 받아서 전달해준다. 그리고 더 필요한 필수 prop이 있다면 imageUploader처럼 Inject 해준다. <- dependency injection
// 어차피 이렇게 해도 props처럼 밑에 계속 내려야 되는 것엔 차이가 없지만
// 다른 service들을 추가시켜줄때 여기에만 추가시키면 되기 때문에 좀 더 편리하다.
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
