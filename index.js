// Write your code here!

const mainElem = document.querySelector("main#main");
document.body.removeChild(mainElem);

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = `Nelson is the champion`;

document.body.appendChild(newHeader);
