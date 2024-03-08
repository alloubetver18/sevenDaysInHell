'use strict';

/* Lógica del carrusel */

var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    },
    on: {
        resize: function resize() {
            swiper.changeDirection(getDirection());
        }
    }
});

/* Lógica del Tabs */

var li = document.querySelectorAll('.ul.personajes .li');
var bloque = document.querySelectorAll('.bloque');

// CLICK en li
// TODOS .li quitar la clase activo
// TODOS .bloque quitar la clase activo
// .li con la posicion se añadimos la clase activo
// .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach(function (cadaLi, i) {
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click', function () {

        // Recorrer TODOS los .li
        li.forEach(function (cadaLi, i) {
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo');
            // Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo');
        });

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo');
        // En el bloque con la misma posición le añadimos la clase activo
        bloque[i].classList.add('activo');
    });
});

/* Lógica del Lightbox */
var enlaces = document.querySelectorAll('.ul .a');
var lightbox = document.querySelector('.lightbox');
var grande = document.querySelector('.grande');
var cerrar = document.querySelector('.cerrar');

enlaces.forEach(function (cadaEnlace, i) {
    enlaces[i].addEventListener('click', function (e) {
        e.preventDefault();
        var ruta = cadaEnlace.querySelector('.img').src;
        console.log(ruta);

        lightbox.classList.add('activo');
        grande.setAttribute('src', ruta);
    });
});

cerrar.addEventListener('click', function () {
    lightbox.classList.remove('activo');
});

/* Lógica del acordeón */

var bloque2 = document.querySelectorAll('.acordeon .bloque');
var h2 = document.querySelectorAll('.h2');

// Cuando CLICK en h2,
// QUITAR la clase activo de TODOS los bloque
// Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h2.forEach(function (cadaH2, i) {
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', function () {

        // Recorrer TODOS los bloque
        bloque2.forEach(function (cadaBloque, i) {
            // Quitamos la clase activo de TODOS los bloques
            bloque2[i].classList.remove('activo');
        });
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque2[i].classList.add('activo');
    });
});