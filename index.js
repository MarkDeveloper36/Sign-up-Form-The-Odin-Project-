let passwordInput = document.querySelector('#password');
let confirmationInput = document.querySelector('#password-confomation');
let passwordErrorMsg = document.querySelector('#password-conformation-error-p');
let passwordLenthErrorMsg = document.querySelector('#password-length-error-p');

passwordInput.addEventListener('input', passwordValidation);
confirmationInput.addEventListener('input', passwordValidation);

function passwordValidation(){
    if(passwordInput.value.length > 5){
        passwordLenthErrorMsg.style.display = 'none';
        if (isPasswordEqual() === true){
            passwordInput.style.border = '1px solid #E5E7EB';
            confirmationInput.style.border = '1px solid #E5E7EB';
            passwordErrorMsg.style.display = 'none';
        } else{
            passwordInput.style.border = '1px solid red';
            confirmationInput.style.border = '1px solid red';
            passwordErrorMsg.style.display = 'block';
        }
    } else{
        passwordLenthErrorMsg.style.display = 'block';
        passwordErrorMsg.style.display = 'none';
    }
}

function isPasswordEqual(){
    let password = passwordInput.value;
    let confirmation = confirmationInput.value;
    if(password === confirmation){
        return true;
    } else {
        return false
    }
}