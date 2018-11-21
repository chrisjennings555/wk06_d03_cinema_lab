const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findFilmTitles = function () {
  return this.films.map((film) => {
    const filmTitles = film.title;
    return filmTitles;
  });
};

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find(function (film) {
    return film.title === title
  })
};

Cinema.prototype.filterFilmByGenre = function (genre) {
  return this.films.filter(function (film) {
    return film.genre === genre
  })
};

Cinema.prototype.findFilmsByYear = function (year) {
  return this.films.filter((film) => {
    return film.year === year
  })
};

Cinema.prototype.findFilmsOverLength = function (duration) {
  return this.films.filter((film) => {
    const selectedFilms = film.length >= duration;
    return selectedFilms;
  })
};

Cinema.prototype.findTotalRunningTime = function () {
  const allDurations = this.films.map((film) => {
    const duration = film.length;
    return duration;
  })
  const totalDuration = allDurations.reduce((accum, time) => {
    return accum += time;
  }, 0);
  return totalDuration;
};


module.exports = Cinema;
