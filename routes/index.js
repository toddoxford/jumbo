const axios = require('axios');
const api_key = '6ed12e064b90ae1290fa326ce9e790ff'

// Application root
exports.root = function (req, res) {
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US')
  .then(response => {
    let movies = response.data.results;
    res.render('index', {
      helper: require('../helpers/helper'),
      title: 'Popular Movies',
      movies: movies
    });
  })
  .catch(err => {
    console.log(err);
  });
};

// Movie Search
exports.search = function (req, res) {
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&query=' + req.body.search_criteria)
  .then(response => {
    let movies = response.data.results;
    console.log(movies);
    res.render('index', {
      helper: require('../helpers/helper'),
      title: 'Search Results',
      movies: movies
    });
  })
  .catch((err) => {
    console.log(err);
  })
};

// Movie details
exports.movie = function (req, res) {
  console.log(req.params.id);
  axios.get('https://api.themoviedb.org/3/movie/'+req.params.id+'?api_key=6ed12e064b90ae1290fa326ce9e790ff')
  .then((response) => {
    let movie = response.data;
    console.log(movie);

    res.render('movie', {
      helper: require('../helpers/helper'),
      title: movie.title,
      movie: movie
    });
  })
  .catch((err) => {
    console.log(err);
  })
};

// Error
exports.error = function (req, res) {
  res.render('error', {
    title: '404',
    message: 'Page Could Not Be Found'
  });
};
