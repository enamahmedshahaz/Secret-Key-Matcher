let generatedPassword = '';

let enteredPassword = '';

function generateBtnHandler() {
    generatedPassword = getRandomPass();
    document.getElementById('pass-gen-field').setAttribute('value', generatedPassword);
}

function getRandomPass() {
    let pass = Math.floor(100000 + Math.random() * 900000);
    return pass;
}


function inputBtnHandler(event) {

    let btnClassName = event.target.getAttribute('class');
    let notNumButtonPressed = btnClassName.includes('btn-delete') || btnClassName.includes('btn-clear') || btnClassName.includes('btn-submit');

    if (notNumButtonPressed) {
        console.log('control button pressed');

    } else {
        let pressedNumber = event.target.innerText;
        showNumberToInputField(pressedNumber);
        console.log('Number button pressed: ', event.target.innerText);
    }
}

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
