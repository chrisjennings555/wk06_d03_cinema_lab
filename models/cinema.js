const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findFilmTitles = function (films) {
  const result = films.map((film) => {
    const filmTitles = film.title;
    return filmTitles;
  });
  return result
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

// function (film){
//   return film.title === title
// })
//
// const Array.prototype.find = function(userFunction){
//   for (var i = 0; i < this.array.length; i++) {
//     if userFunction(this.array[i], i, this.array) {
//       return this.array[i]
//     }
//   }
// }

module.exports = Cinema;
