let btn1 = document.getElementById('mybutton');
let btn2 = document.getElementById('mybutton2');
let copy = document.getElementById('copy');
let ram = document.getElementById('ram');
let back=document.getElementById('main');

let rgb1 = "#000";
let rgb2 = "#fff";

const hexValues = function () {
    const myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const handleBtn1 = function () {
    rgb1 = hexValues();
    btn1.innerText = rgb1;
    updateBackground();
    mainBackgrond();
};

const handleBtn2 = function () {
    rgb2 = hexValues();
    btn2.innerText = rgb2;
    updateBackground();
    mainBackgrond();
    
};

const updateBackground = function () {
    document.body.style.backgroundImage =`linear-gradient(to right, ${rgb1},${rgb2})`;
    ram.innerText =`background-image:linear-gradient(to right, ${rgb1}, ${rgb2});`;
};
const mainBackground = function () {
    document.body.style.backgroundImage =`linear-gradient(to right, ${rgb1},${rgb2})`;
};
btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
copy.addEventListener("click", () => {
    const textToCopy = ram.innerText;
    navigator.clipboard.writeText(textToCopy)
       .then(() => {
            alert("Copied to clipboard!");
        })
        .catch(err => {
            console.error("Could not copy text: ", err);
            alert("Failed to copy. Please try again.");
        });
});