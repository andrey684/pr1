"use strict";

const numberOfFilms = +prompt("How many films have you wached","");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actours : {},
    genres : [],
    privat : false
};

const a = prompt("Last of the movie?",""),
      b = +prompt("Your rate of this movie",""),
      c = prompt("Last of the movie?",""),
      d = +prompt("Your rate of this movie","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
