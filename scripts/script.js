let generatedPassword = '*';
let enteredPassword = '';

//Shows random password to the field
function generateBtnHandler() {
    generatedPassword = getRandomPass().toString();
    document.getElementById('pass-gen-field').setAttribute('value', generatedPassword);
}

//this function returns a six digit random number
function getRandomPass() {
    let pass = Math.floor(100000 + Math.random() * 900000);
    return pass;
}


//Click handler for all input buttons 
function inputBtnHandler(event) {
    //Get class name of clicked button
    let btnClassName = event.target.getAttribute('class');
    //check if the delete-clear-submit buttons are clicked
    let controlBtnPressed = btnClassName.includes('btn-delete') || btnClassName.includes('btn-clear') || btnClassName.includes('btn-submit');

    //works only when digits (0-9) are clicked
    if (!controlBtnPressed) {
        let pressedNumber = event.target.innerText;
        showNumberToInputField(pressedNumber);
    }
}

//This functions shows clicked number to input field
function showNumberToInputField(pressedNumber) {

    const inputField = document.getElementById('pass-input-field');
    let prevNumber = inputField.getAttribute('value');

    //Don't add more than six digit number to input field
    if (prevNumber.length < 6) {
        let newValue = prevNumber.concat(pressedNumber);
        inputField.setAttribute('value', newValue);
        enteredPassword = inputField.getAttribute('value');
    }
}

// handles the delete button functionality
function btnDeleteHandler(event) {
    event.stopPropagation();
    clearResultField();

    let newPass = enteredPassword.substring(0, enteredPassword.length - 1); // removes the last character from the password
    enteredPassword = newPass;
    //sets the new number to input field
    const inputField = document.getElementById('pass-input-field');
    inputField.setAttribute('value', enteredPassword);

}

// handles the clear button functionality
function btnClearHandler(event) {
    event.stopPropagation();
    clearResultField();

    enteredPassword = ''; //make the password empty
    const inputField = document.getElementById('pass-input-field');
    inputField.setAttribute('value', enteredPassword); //clears the password input filed

    let resultField = document.getElementById('result-text');
}

//checks if generatedPassword is enteredPassword and shows result with colored text
function btnSubmitHandler(event) {
    event.stopPropagation();
    clearResultField();

    let resultField = document.getElementById('result-text');

    if (generatedPassword == enteredPassword) {
        resultField.classList.add("result-right");
        resultField.innerText = "PIN matched successfully";
    } else {
        resultField.classList.add("result-wrong");
        resultField.innerText = "Sorry! PIN did not match";
    }
}

//clears the result notification field text and its style 
function clearResultField() {
    let resultField = document.getElementById('result-text');
    resultField.innerText = '';
    resultField.removeAttribute('class');
}