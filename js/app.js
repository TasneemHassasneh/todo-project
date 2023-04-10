//username
let username = prompt('Enter your username')

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
let ageAlert = alert('your age must be more than zero ->')


let age = prompt('your age, must be more than zero')

//check age
if (age <= 0) {

    age = prompt('your age, must be more than zero')
}

let skip = confirm('Are you sure you want to skip the welcoming message?')

if (skip === false) {

    let welcomingMessage = alert('Welcome ' + ms + ' ' + username)
}



