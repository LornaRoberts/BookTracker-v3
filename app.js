const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.routes'); // Imports routes for the products
const app = express();
var path = require('path');
const cors = require('cors');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
    origin: '*'
}));



var options = {
    setHeaders: function (res, path, stat) {
      res.set('Content-type', 'text/css')
    }
  }


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use("/styles", express.static(__dirname + '/styles', options));
app.use('/product', product);
app.use(product);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});



// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://Booktracker:Benny1@cluster0.n9ye2kg.mongodb.net/?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));