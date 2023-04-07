"use strict";

document.getElementById("add-item-btn").addEventListener("click", add_element);

function add_element() {
    let element = document.createElement("div");
    const btn = document.createElement("button");
    const dialog = document.createElement("DIALOG");
    const textNode = document.createTextNode("This is an open dialog window");
    element.className = "element";
    element.innerHTML = "<button onclick=\"openWin()\">Открыть окно</button>";
    element.style.color = getRandomColor();
    btn.innerText = "Закрыть";
    btn.innerHTML = "<button onclick=\"closeWin()\">Закрыть окно</button>";
    dialog.setAttribute("open", "close");
    document.getElementById("container").appendChild(element);
    document.getElementById("container").appendChild(btn);
    dialog.appendChild(textNode);
    document.getElementById('container').appendChild(dialog);
    }

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let myWindow;

function openWin() {
  myWindow = window.open("", "", "width=200,height=100");
}

function closeWin() {
  myWindow.close();
}