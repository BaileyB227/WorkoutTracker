const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require('./routes/api'));
app.use(require('./routes/html'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});