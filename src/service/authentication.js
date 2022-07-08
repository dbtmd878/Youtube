import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseApp from "./service";

class AuthService {
  login(name) {
    const auth = getAuth();
    // const provider = new GoogleAuthProvider();
    const provider = siteName(name);
    return signInWithPopup(auth, provider);
  }
  logout() {
    const auth = getAuth();
    signOut(auth);
  }
  signedInUser(callback) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => callback(user));
  }
}

function siteName(name) {
  switch (name) {
    case "Google":
      return new GoogleAuthProvider();
    case "Github":
      return new GithubAuthProvider();
    default:
      throw Error("Not valid name");
  }
}

export default AuthService;
