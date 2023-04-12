'use strict';

//functions
function storeData(){
    return userData.push(
        ['user name :',username], 
        ['gender :',gender],
        ['age :',age],
        ['active person :',activePerson],
        ['like music :',likeMusic],
        ['have pet :',havePet])
}

function isEmpty(str){
    if( str.length === 0) {
        return true
    }
    return false
}

function checkString(){
    for (let i =0 ; i < userData.length;i++ ){
        if(isEmpty(userData[i][1])){
            userData[i][1] = 'invalid'
        }
    }
}

function printData(){
    for(let i = 0 ; i<userData.length-1 ; i++){
        for ( let j =0 ;j<2;j++){
            console.log(userData[i][j] )
        }
    }
}

function checkAnswer(str){
    while((str !== 'yes') && (str !== 'no')){
        str=prompt("your answer should be yes/no")
    }
}


//recourses
let userData =[];

let username = prompt('Enter your username')

let gender = prompt('your gender, it should be male/female')

let ms = ''

if (gender === 'male') {
    ms = 'Mr'
} else if (gender === 'female') {
    ms = 'Ms'
} else {
    ms = ''
}

let age = prompt('your age')
while(age <= 0){
    age=prompt('your age ,must be more than zero')
}

let activePerson = prompt('Are you an active person?')
checkAnswer(activePerson)

let likeMusic = prompt('Do you like to work while listening to music?')
checkAnswer(likeMusic)

let havePet = prompt('Do you have pets?')
checkAnswer(havePet)

let skip = confirm('Are you sure you want to skip the welcoming message?')

if (!skip) {

    let welcomingMessage = alert('Welcome ' + ms + ' ' + username)
}

storeData()

checkString()

printData()




