
import { firebase } from '@firebase/app'
import "firebase/database";
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyDWeI9YDiSVV23PmMPvCsESG-IB4D3__c0",
    authDomain: "gestao-tarefas-40c08.firebaseapp.com",
    projectId: "gestao-tarefas-40c08",
    storageBucket: "gestao-tarefas-40c08.appspot.com",
    messagingSenderId: "546393215838",
    appId: "1:546393215838:web:e909604f81fcb89549f5cf",
    databaseURL: "https://gestao-tarefas-40c08-default-rtdb.firebaseio.com/",
  };

  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database().ref("/tarefas");

  export default database;