/* function */

/* function summa() {
    console.log('funksiya ishladi');
}

function pul() {
    summa()
}

pul() */

/* function name(y,x) {
    return(x/y);
}
console.log(name(name(name(1,3),2),6)); */

/* function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

console.log(random(1,10)); */



var img = document.querySelector('.img'),
    imgs = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg'
    ];


function change(img, imgs) {

    'use strict';

    setInterval(function () {

        var randomNum = Math.floor(Math.random() * imgs.length);

        console.log(randomNum);
        
        img.src = imgs[randomNum];

    }, 1000);
}

change(img, imgs);