const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);

const userinfoRouter = require('./router/userinfoRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/userinfo', userinfoRouter);

http.listen(8080, () => {
  console.log(`Listening port 8080`)
})

module.exports = app;