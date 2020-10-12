"use strict";
/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

// for (let i = 0; i <  2; i++ ) {
//     const a = prompt("One of the last film?",""),
//           b = +prompt("Your rate of this film","");
//     if (a != "" && b != "" && a != null && b != null && a.length <= 50) {
//     personalMovieDB.movies[a] = b;
//     } else {
//         console.log("error");
//         i--;
//     }
// }
let i = 0;
while (i < 2) {
    const a = prompt("One of the last film?",""),
          b = +prompt("Your rate of this film","");
          if (a != "" && b != "" && a != null && b != null && a.length <= 50) {
              personalMovieDB.movies[a] = b; 
          } else {
              console.log("error");
              i--;
          }  
    i++;      
}



if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов.");
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert("Вы класический зритель.");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка!");
};


console.log(personalMovieDB);


