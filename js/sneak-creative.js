import { imagenes } from './db-fotos.js';

const pics = document.querySelector('.grid');
const fotos = imagenes();

eventosListener();

function eventosListener() {
    document.addEventListener('DOMContentLoaded', () => {
        mostrarfotos(fotos);
    });
}

function mostrarfotos(imagenes) {
    sortImagenes(imagenes);

    imagenes.forEach(iterador => {
        //destructory is not working
        //const { name, desc } = imagenes;

        const div = document.createElement('div');
        div.classList.add('grid-item');

        const imagen = document.createElement('img');
        imagen.setAttribute("src", iterador.name);
        imagen.setAttribute("alt", iterador.desc);
        imagen.setAttribute("width", '90%');

        div.appendChild(imagen);
        pics.appendChild(div);

    });
}

function sortImagenes(x) {
    x = x.sort(() => Math.random() - 0.5);
}