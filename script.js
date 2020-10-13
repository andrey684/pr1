"use strict";
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count : null,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function() {
        personalMovieDB.count = +prompt("How many films have you watched?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
            personalMovieDB.count = +prompt("How many films have you watched?", "");
        }
    },
    rememberMyFilms : function() {
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
    },
    detectPersonalLevel : function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов.");
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            alert("Вы класический зритель.");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка!");
        }
    },
    
    writeYourGenres : function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
            if(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") {
               i--;
            } 
        } personalMovieDB.genres.forEach(function(value, item){
            console.log(`Любимый жанр #${item + 1} - это ${value}`);
        });
    },

    showMyDB : function() {
        personalMovieDB.privat = confirm("enter true or false: "); 
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("ERROR!!!");
        }
    },
    
    toggleVisibleMyDB : function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
//  personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();


