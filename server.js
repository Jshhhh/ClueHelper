const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

const port = 3030;
app.listen(port, () => console.log(`Listening on ${port}`));
