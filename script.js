const pet = document.querySelector('.portrait');
const countDisplay = document.querySelector('.countDisplay');
let petCount = 0;

pet.addEventListener('click', (e) => {
    confetti();
    petCount += 1;
    countDisplay.textContent = petCount;
});
