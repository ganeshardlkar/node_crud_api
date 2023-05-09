const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index.js')
const { PORT } = require('./config/serverConfig.js');
const database = require('./config/database.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', apiRoutes)

app.listen(PORT, async() => {
    await database();
    console.log(`Listening on port ${PORT}`);
})