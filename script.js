const pet = document.querySelector('.portrait');
const countDisplay = document.querySelector('.countDisplay');

const createAccount = document.getElementById('createAccount');
const createAccount2 = document.getElementById('createAccount-2');

let firstLabel = document.createElement('label');
let lastLabel = document.createElement('label');
let emailLabel = document.createElement('label');
let phNum = document.createElement('label');
let pwLabel = document.createElement('label');
let confirmPw = document.createElement('label');

let firstInput = document.createElement('input');
let lastInput = document.createElement('input');
let emailInput = document.createElement('input');
let numInput = document.createElement('input');
let pwInput = document.createElement('input');
let confirmInput = document.createElement('input');

firstLabel.setAttribute('for', 'firstName');
firstLabel.textContent = 'First name';
firstInput.setAttribute('type', 'text');
firstInput.setAttribute('name', 'firstName');
firstInput.setAttribute('id', 'firstName');


lastLabel.setAttribute('for', 'lastName');
lastLabel.textContent = 'Last name';
lastInput.setAttribute('type', 'text');
lastInput.setAttribute('name', 'lastName');
lastInput.setAttribute('id', 'lastName');


emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email';
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('id', 'email');

phNum.setAttribute('for', 'phNum');
phNum.textContent = 'Phone number';
numInput.setAttribute('type', 'number');
numInput.setAttribute('name', 'phone');
numInput.setAttribute('id', 'phNum');


pwLabel.setAttribute('for', 'pw');
pwLabel.textContent = 'Password';
pwInput.setAttribute('type', 'password');
pwInput.setAttribute('name', 'password');
pwInput.setAttribute('id', 'pw]');


confirmPw.setAttribute('for', 'confirmPw');
confirmPw.textContent = 'Confirm password';
confirmInput.setAttribute('type', 'password');
confirmInput.setAttribute('name', 'confirm');
confirmInput.setAttribute('id', 'confirmPw');




const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let petCount = 0;

pet.addEventListener('click', (e) => {
    confetti();
    petCount += 1;
    countDisplay.textContent = petCount;
});

function reOrder() {
    
    createAccount.innerHTML = "";
    createAccount2.innerHTML = "";
    createAccount.appendChild(firstLabel);
    createAccount.appendChild(firstInput);
    createAccount.appendChild(lastLabel);
    createAccount.appendChild(lastInput);
    createAccount.appendChild(emailLabel);
    createAccount.appendChild(emailInput);
    createAccount.appendChild(phNum);
    createAccount.appendChild(numInput);
    createAccount.appendChild(pwLabel);
    createAccount.appendChild(pwInput);
    createAccount.appendChild(confirmPw);
    createAccount.appendChild(confirmInput);
}

if (vw <=680) {
    reOrder();        
}


