const express = require('express');

const app = express();
const PORT = process.env.PORT = 8000;

app.use(express.static('www'));

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});