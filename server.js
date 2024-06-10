
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'project')));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'homepage.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});