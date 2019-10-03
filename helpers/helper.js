var func = {
  posterUrl: function(movie) {
    if(movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    else {
      return "https://via.placeholder.com/750?text=Missing+Image";
    }
  },
  coverUrl: function(movie) {
    if(movie.poster_path) {
      return `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    }
    else {
      return "https://via.placeholder.com/1080?text=Missing+Image";
    }
  },
  quality: function(vote) {
    switch (true) {
    case vote >= 7.5:
      return "mli-quality-high";
      break;
    case vote >= 4.5:
      return "mli-quality-medium";
      break;
    default:
      return "mli-quality-low";
      break;
    }
  },
  rating: function(vote) {
    return (vote*10) +"%"
  },
  minsToHrsMins: function(mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    return `${h}h ${m}min`;
  }
}
module.exports = func;
