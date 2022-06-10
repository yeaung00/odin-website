const pet = document.querySelector('.portrait');
const countDisplay = document.querySelector('.countDisplay');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phNum = document.getElementById('phNum');
const pw = document.getElementById('pw');
const confirmPw = document.getElementById('confirmPw');
const firstLabel = document.getElementById('firstLabel');
const lastLabel = document.getElementById('lastLabel');
const emailLabel = document.getElementById('emailLabel');
const numLabel = document.getElementById('numLabel');
const pwLabel = document.getElementById('pwLabel');
const confirmLabel = document.getElementById('confirmLabel');
const createAccount = document.getElementById('createAccount');
const createAccount2 = document.getElementById('createAccount-2');
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
    createAccount.appendChild(firstName);
    createAccount.appendChild(lastLabel);
    createAccount.appendChild(lastName);
    createAccount.appendChild(emailLabel);
    createAccount.appendChild(email);
    createAccount.appendChild(numLabel);
    createAccount.appendChild(phNum);
    createAccount.appendChild(pwLabel);
    createAccount.appendChild(pw);
    createAccount.appendChild(confirmLabel);
    createAccount.appendChild(confirmPw);
}

if (vw <=680) {
    reOrder();        
}


