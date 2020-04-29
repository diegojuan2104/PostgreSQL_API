const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./routes/indexRoutes'));

app.listen(4000);
console.log('Server on port 4000');
