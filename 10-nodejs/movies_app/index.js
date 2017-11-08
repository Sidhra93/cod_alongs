var express = require('express');
var request = require('request');

var app = express();
const PORT = 8888;
var logger = require('./logger')

var pagesController = {
  home: function(req, resp){
    resp.render('index');
  }
}

app.set('views', './views');
app.set('view engine', 'ejs');

  // ||
  // ||
  app.use(logger);
  // ||
  // ||
  // \/
  app.use(express.static('public'));// a middleware to handle static files
  // ||
  // \/
app.get('/', pagesController.home);

app.get('/api/info', function(req, resp){
  resp.json({version: 1});
});

app.get('/about', function(req, resp){
  resp.send('about page')
});

app.get('/details', function(req, resp){
  var url = `http://www.omdbapi.com/?apikey=2f6435d9&t=${req.query.title}`
  request({
    url: url,
    json: true
  }, function(error, response, movie){
    resp.render('details', {title: movie.Title, image_url: movie.Poster, description: movie.Plot});
  });
});

app.listen(PORT);
