//////////////////// 1 ////////////////////
// data una variabile chiamata gridSize, 
// disegnare una scacchiera di gridSize x gridSize

let rect = {};
let canvas;
let ctx;
let countX = 0;
let countY = 0;
const gridSize = 16;
const colorWhite = 'yellow';
const colorBlack = 'red';

function setUp() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');

    //dimensioni rect
    rect.size = 600/gridSize;

    //partenza rect
    rect.originX = 0;
    rect.originY = 0;

    //colori rect iniziale
    rect.color = colorWhite;

    draw();
}

function update() {
    countX++;

    if(rect.originX === (gridSize - 1) * rect.size){
        rect.originY += rect.size;
        rect.originX = 0;
        countX = 0;
        countY++;
    }
    else{
        rect.originX += rect.size;
    }


    if ((countX + countY) % 2 === 0) {
        rect.color = colorWhite;
    } else {
        rect.color = colorBlack;
    }


}

function draw() {
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.originX, rect.originY, rect.size, rect.size);
}

function gameLoop(elapsedTime) {
    
    update();

    draw();

    requestAnimationFrame(gameLoop);
}

function start() {
    setUp();

    requestAnimationFrame(gameLoop);
}

start();

//////////////////// 2 ////////////////////
// far nevicare sullo schermo aijs.io

//////////////////// 3 ////////////////////
// a) fare dei rettangoli di altezza uguale ad altezze diverse che si muovano verso detsra a velocità diverse
// b) righe pari verso destra, righe dispari verso sinistra
// c) più rettangoli per riga

//////////////////// 4 ////////////////////
// bubblesort, studiarmi un algoritmo di sorting