const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function() {
  console.log('Your node js server is running on localhost:' + process.env.PORT);
});

// Routes
app.get('/', routes.root);
app.post('/', routes.search);
app.get('/movie/:id', routes.movie);
app.get('*', routes.error);
