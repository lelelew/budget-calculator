// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
  authDomain: "yardzen-demo.firebaseapp.com",
  databaseURL: "https://yardzen-demo.firebaseio.com",
  projectId: "yardzen-demo",
  storageBucket: "yardzen-demo.appspot.com",
  messagingSenderId: "509183652730",
  appId: "1:509183652730:web:ba2208f7d8e0882f009cc3",
};

/**
 * Initializes a Firebase app if one isn't already initialized,
 * otherwise returns the already initialized Firebase app.
 *
 * This function resolves error 'Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app)'
 * from: https://blog.funwith.app/posts/using-firebase-in-flutter-web/
 *
 * @returns an initialized firebase app
 */
export function firebaseInitialize() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  return firebase.apps[0];
}
