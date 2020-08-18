import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBoHlRg1SYDteByc4cEN1Ew5NBYGkXPY3w",
  authDomain: "nahuel-jobs-app.firebaseapp.com",
  databaseURL: "https://nahuel-jobs-app.firebaseio.com",
  projectId: "nahuel-jobs-app",
  storageBucket: "nahuel-jobs-app.appspot.com",
  messagingSenderId: "441548689012",
  appId: "1:441548689012:web:d3274ee965f1d8f9074b21",
  measurementId: "G-99SKRZ6ZMB"
}

firebase.initializeApp(firebaseConfig)

export default firebase

