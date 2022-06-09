const subscribeBtn = document.querySelector('button');

subscribeBtn.addEventListener('click', (e) => {
    x1 = 149 / getX(e);
    y1 = 400.4 / getY(e);
    console.log(e);
    confetti();
});
