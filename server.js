const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then((res) => {console.log('MongoDB connected')})
  .catch((err) => console.log(err))

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`))
