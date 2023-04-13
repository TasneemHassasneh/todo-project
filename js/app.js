'use strict';

//functions
function question(str){
    let q = prompt(str)
    if(isEmpty(q)){
        return q='invalid'
    }
    return q
}

function isEmpty(str){
    if(str.length===0)
        return true
    return false
}

function printData(arr){
    for(let i = 0 ; i <= arr.length ; i++){
        console.log(arr[i])
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

let skip = confirm('Are you sure you want to skip the welcoming message?')


if (!skip) {

    let welcomingMessage = alert('Welcome ' + ms + ' ' + username)
}

let str1 ="Question1"
let ans1 = question(str1)


let str2 ="Question2"
let ans2 = question(str2)

let str3 ="Question3"
let ans3 = question(str3)

 userData=[ans1,ans2,ans3]
 printData(userData)