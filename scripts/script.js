let generatedPassword = '';

function generateBtnHandler() {
    generatedPassword = getRandomPass();
    document.getElementById('pass-gen-field').setAttribute('value', generatedPassword);
}

function getRandomPass() {
    let pass = Math.floor(100000 + Math.random() * 900000);
    return pass;
}

