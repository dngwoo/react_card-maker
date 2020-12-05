import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    // providerName이란 google, facebook등을 의미한다.

    // 예제) https://firebase.google.com/docs/auth/web/github-auth?authuser=0
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // configure이 들어간 firebase를 활용하여 인증하게 된다.
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  // auth의 상태가 바꼇을 경우 사용되는 메서드이다.
  onAuthChange(onUserChanged) {
    // https://firebase.google.com/docs/auth/web/start?authuser=0#set_an_authentication_state_observer_and_get_user_data 참고
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
