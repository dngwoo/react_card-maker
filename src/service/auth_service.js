import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    // providerName이란 google, facebook등을 의미한다.

    // 예제) https://firebase.google.com/docs/auth/web/github-auth?authuser=0
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // configure이 들어간 firebase를 활용하여 인증하게 된다.
    return firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.error(errorCode, errorMessage, email, credential);
      });
  }
}

export default AuthService;
