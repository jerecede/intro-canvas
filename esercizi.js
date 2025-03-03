//////////////////// 1 ////////////////////
// data una variabile chiamata gridSize, 
// disegnare una scacchiera di gridSize x gridSize

// let rect = {};
// let canvas;
// let ctx;
// let countX = 0;
// let countY = 0;
// const gridSize = 50;
// const color1 = 'pink';
// const color2 = 'purple';

// function setUp() {
//     canvas = document.getElementById('my-canvas');
//     ctx = canvas.getContext('2d');

//     //dimensioni rect
//     rect.size = 600/gridSize;

//     //partenza rect
//     rect.originX = 0;
//     rect.originY = 0;

//     //colori rect iniziale
//     rect.color = color1;

//     //creazione primo rettangolo
//     draw();
// }

// function update() {
//     countX++;

//     if(rect.originX === (gridSize - 1) * rect.size){
//         rect.originY += rect.size;
//         rect.originX = 0;
//         countX = 0;
//         countY++;
//     }
//     else{
//         rect.originX += rect.size;
//     }


//     if ((countX + countY) % 2 === 0) {
//         rect.color = color1;
//     } else {
//         rect.color = color2;
//     }


// }

// function draw() {
//     ctx.fillStyle = rect.color;
//     ctx.fillRect(rect.originX, rect.originY, rect.size, rect.size);
// }

// function gameLoop(elapsedTime) {
    
//     update();

//     draw();

//     requestAnimationFrame(gameLoop);
// }

// function start() {
//     setUp();

//     requestAnimationFrame(gameLoop);
// }

// start();

//////////////////// 2 ////////////////////
// far nevicare sullo schermo aijs.io

let entities = [];
let canvas;
let ctx;

function setUp() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');

    for (let i = 0; i < 300; i++) {
        const rect = {};

        //dimensioni rect
        rect.side = (Math.random() * 6) + 4;

        //partenza rect
        rect.originX = Math.random() * 600;
        rect.originY = Math.random() * -600;

        //colori rect iniziale
        rect.color = 'white'

        //velocità rect inziale
        rect.speedX = 0;
        rect.speedY = 0.5;
        
        entities.push(rect);
    }
}

function update() {
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];

        rect.originY += rect.speedY;
        rect.originX += rect.speedX;

        //CAMBIA VELOCITA

        const rollX = Math.random();

        //probabilità di cambiare velocità
        if(rollX < 0.5) {
            //la curva e velocità
            const speedDelta = -0.02;
            rect.speedX += speedDelta;
        } else {
            const speedDelta = 0.02;
            rect.speedX += speedDelta;
        }

        rect.originY = rect.originY % 600;
    }
}

function draw() {
    ctx.clearRect(0, 0, 600, 600);

    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.originX, rect.originY, rect.side, rect.side);
    }
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

//////////////////// 3 ////////////////////
// a) fare dei rettangoli di altezza uguale ad altezze diverse che si muovano verso detsra a velocità diverse
// b) righe pari verso destra, righe dispari verso sinistra
// c) più rettangoli per riga

//////////////////// 4 ////////////////////
// bubblesort, studiarmi un algoritmo di sorting