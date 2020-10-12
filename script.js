"use strict";
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();

showMyDB();

function start() {
    numberOfFilms = +prompt("How many films have you watched?", "");
    if (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt("How many films have you watched?", "");
    }
}

function rememberMyFilms() {
    for (let i = 0; i <  2; i++ ) {
        const a = prompt("One of the last film?",""),
              b = +prompt("Your rate of this film","");
        if (a != "" && b != "" && a != null && b != null && a.length <= 50) {
        personalMovieDB.movies[a] = b;
        } else {
            console.log("error");
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов.");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        alert("Вы класический зритель.");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка!");
    }
}

function showMyDB() {
    personalMovieDB.privat = confirm("enter true or false: "); 
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("ERROR!!!")
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
    } 
}