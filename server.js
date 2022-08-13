const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const mongoose = require('mongodb');
const bodyParser = require('body-parser');
global.Task = require('./api/models/taskModel')
const routes = require('./api/routes/taskRoutes')

mongoose.connect(
    // 'mongodb://localhost/vuecrudapp',
    // 'mongodb://vuecrudapp:tKYaGlDsiidkEhzSsvR1ureLeuSi9oo8e4E0A6FIiApyAlMOrrwZKcQ41nfJTd3CMSzyr5SXsYkja9l1aMAnmA==@cosmosdb-mongo-01.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmosdb-mongo-01@',
    // 'mongodb://tee:V4G3gzfftLBVIJXHTwixLcBRI3AOyCkFmeEEN6IpasCzPAN53zXnXQ4m9FIfNfGPQtbJEEFQWF2YBRVH59TOgA==@tee.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@tee@/',
       'mongodb://tee:V4G3gzfftLBVIJXHTwixLcBRI3AOyCkFmeEEN6IpasCzPAN53zXnXQ4m9FIfNfGPQtbJEEFQWF2YBRVH59TOgA==@tee.mongo.cosmos.azure.com:10255/vuecludapp?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@tee@/',
    {useNewUrlParser:true}
)

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

routes(app);
app.listen(port);

app.use((req,res) => {
    res.status(404).send({url:`${req.originalUrl} not found`})
})

console.log(`Server started on port ${port}`);
