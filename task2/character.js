"use strict";

fetch("https://rickandmortyapi.com/api/character/1")
    .then((response) => response.json())
    .then((data) => Card (data.results));

function Card(stuff){
    const cardContainer = document.querySelector("#card-group")
    console.log(stuff)
    stuff.forEach(character => {
        cardContainer.innerHTML =
            cardContainer.innerHTML +
        `<div class="card">
            <h2>${character.name}</h2>
            <h4>Статус: ${character.status}</h4>
            <h4>Тип: ${character.species}</h4>
            <img src="${character.image}" class="card-img-top"></a> 
            </div>
            <br>
            `;
    })
}