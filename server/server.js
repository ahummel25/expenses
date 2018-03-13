const path = require('path');
const express = require('express');
const app = express();
const public = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8000

app.use(express.static(public));

app.get('*', (req, res) => {
  res.sendfile(path.join(public, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});