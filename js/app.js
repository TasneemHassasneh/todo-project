'use strict';

function isEmpty(str){
    if(str.length === 0) {
    str = 'invalid'
    }
    console.log(str)
}

function storeData(){
    return userData.push(
        ['user name :',username], 
        ['gender :',gender],
        ['age :',age],
        ['active person :',activePerson],
        ['like music :',likeMusic],
        ['have pet :',havePet])
}

function printData(){
    for(let i = 0 ; i<userData.length ; i++){
        for ( let j =0 ;j<2;j++){
            console.log(userData[i][j] )
        }
    }
}



let userData =[];

//username
let username = prompt('Enter your username')
isEmpty(username)

//gender
let gender = prompt('your gender, it should be male/female')

//ms or mr
let ms = ''

if (gender === 'male') {
    ms = 'Mr'
} else if (gender === 'female') {
    ms = 'Ms'
} else {
    ms = ''
}

//age



let age = prompt('your age')

//check age
if (age <= 0) {

    let ageAlert = alert('your age must be more than zero ->')
    age = prompt('your age, must be more than zero')
}

let activePerson = confirm('Are you an active person?')

let likeMusic = confirm('Do you like to work while listening to music?')

let havePet = confirm('Do you have pets?')

let skip = confirm('Are you sure you want to skip the welcoming message?')

if (skip === false) {

    let welcomingMessage = alert('Welcome ' + ms + ' ' + username)
}

storeData()

console.log( printData())




