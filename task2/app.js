"use strict";
fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => Cards (data.results));

function Cards(stuff){
    const cardContainer = document.querySelector("#card-group")
    console.log(stuff)
    stuff.forEach(character => {
        cardContainer.innerHTML =
            cardContainer.innerHTML +
        `<div class="card">
            <h2>${character.name}</h2>
            <a href="character.html"><img src="${character.image}" class="card-img-top"></a> 
            <h4>Статус: ${character.status}</h4>
            <h4>Тип: ${character.species}</h4>
            </div>
            <br>
            `;
    })
}


let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('character.id');