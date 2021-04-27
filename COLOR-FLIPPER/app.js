const colors = ["green", "red", "grey", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}