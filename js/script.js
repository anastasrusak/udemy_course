'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i<2; i++){
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length <= 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('little');
    } else if (personalMovieDB.count > 30){
        console.log('many')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log ('ok');
    }  else console.log('error');
    
}

detectPersonalLevel();

console.log(personalMovieDB);

// function showMyDB() {
//     if (personalMovieDB.privat = false){
//         console.log (personalMovieDB);
//     }
// }

// showMyDB();

function showMyDB(hidden){
    if (!hidden){
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i<=3; i++){
        let genre = prompt(`Your fav movie ${i}`, '');
        if (genre != null && genre != '' &&  genre.length <= 50 ){
            personalMovieDB.genres[i-1] = genre;
        } else {
            console.log('error2');
            i--;
        }
    }
    //console.log(personalMovieDB.genres);
}

writeYourGenres();
// let i=0;
// while (i<2){
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length <= 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
            
//     } else {
//         console.log('error');
//         i--;
//     }

//     i++;
// }
// let i=0;
// do{
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length <= 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
            
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i<2);



