//Retrieving DOM elements
//Event listener
// showError and showSuccess functions
//checking validing for each input fields
//added password match function to confirmPassword
//added email validation

//REFACTORING
//remove all if-else in event listener
//add new function --> checkRequired()
//passing the inputs through an array
//forEach loop
//adding a new function to get field name --> getFieldName()
//checkLength function
//check email validation
//check is passwords match

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


//show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//getFieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//check required
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required!`)
        } else {
            showSuccess(input)
        }
    });
}

//Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters!`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must not exceed ${max} characters`)
    } else {
        showSuccess(input)
    }
}


//isEmailValid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid!')
    }

};


//passwords match check
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input1, 'Passwords no not match!')
    }
}

//Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, confirmPassword]);
    checkLength(username, 6, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordsMatch(confirmPassword, password);
});
