const express = require('express');
const app = express();
const port = 3000;
const firebase = require("firebase-admin");
require('dotenv').config;

app.get('/')

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID
};
firebase.initializeApp(firebaseConfig)
let db = firebase.database();

const data = db.collection("UserInfo").doc("UserInfo").get()
  .then((res) => {
    console.log(res)
  })

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})