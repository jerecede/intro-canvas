// setTimeout(() => { //run una sola volta
// }, timeout);
// setInterval(() => { //run a ripetizione
// }, interval);

let entities = [];
let canvas;
let ctx;
let tot = 1000;

function setUp() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');

    for (let i = 0; i < tot; i++) {
        const rect = {};

        //dimensioni rect
        rect.width = Math.random() * 20;
        rect.height = Math.random() * 20;

        //partenza rect
        rect.originX = Math.random() * (600 - rect.width);
        rect.originY = Math.random() * (600 - rect.height);


        //colori rect iniziale
        rect.red = Math.random() * 255;
        rect.green = Math.random() * 255;
        rect.blue = Math.random() * 255;
        // rect.alpha = Math.random();

        //velocità rect inziale
        rect.speedX = Math.round(Math.random() * 3) + 1;
        rect.speedY = Math.round(Math.random() * 3) + 1;

        entities.push(rect);
    }
}

//modifica gli attributi rettangolo per il prossimo frame
function update() {
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        rect.originY += rect.speedX;
        rect.originX += rect.speedY;

        //RESPAWN
        rect.originX = rect.originX % 600;
        rect.originY = rect.originY % 600;
    }
}

//disegna il rettangolo modificato in update, lo muove
function draw() {

    // ctx.clearRect(0, 0, 600, 600);

    ctx.fillStyle = 'rgba(255,255,255,0.2)'; //sovrappone tante volte il coso trasparente sull'intero canvas fino a far scomparire il rettangolo nero
    ctx.fillRect(0,0,600,600)
    
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        ctx.fillStyle = `rgb(${rect.red},${rect.green},${rect.blue})`;
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
    }
}

function gameLoop(elapsedTime) {

    // console.log(elapsedTime); //quanto tempo sta passando per giro dallo start

    update();

    draw();

    requestAnimationFrame(gameLoop);
}

function start() {
    setUp();

    requestAnimationFrame(gameLoop);
}

start();