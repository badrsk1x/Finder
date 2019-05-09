import Rebase from "re-base ";
import firebase from "firebase";

const Config = {
  apiKey: "AIzaSyCWBMvVGdv0FrLfmqp7H3vq_CUZ53GnWh8",
  authDomain: "myjobapp-7aa71.firebaseapp.com",
  databaseURL: "https://myjobapp-7aa71.firebaseio.com",
  projectId: "myjobapp-7aa71",
  storageBucket: "myjobapp-7aa71.appspot.com",
  messagingSenderId: "834067989968",
  appId: "1:834067989968:web:173cbd006c5cdd1f"
};
// Initialize Firebase
const app = firebase.initializeApp(Config);
const base = Rebase.createClass(app.database());

export { base };
