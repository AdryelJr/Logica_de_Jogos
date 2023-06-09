// Criação do canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);


// Imagem de fundo
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
}
bgImage.src = 'img/45908.jpg';


// Imagem do herói
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
}
heroImage.src = 'https://static.wikia.nocookie.net/alendadoheroi/images/b/b1/Escudo.gif/revision/latest?cb=20160401125418&path-prefix=pt-br';



//Objetos do jogo
const hero = {
    speed: 256 // movimento em pixel por segundo
}

let moedasPegas = 0;


// Controle do teclado
const keysDown = {};

window.addEventListener('keydown', function (e){
    keysDown[e.keyCode] = true;
}, false)

window.addEventListener('keyup', function (e){
    delete keysDown[e.keyCode];
}, false)

