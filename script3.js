let entities = [];
let canvas;
let ctx;

function setUp() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');

    for (let i = 0; i < 1000; i++) {
        const rect = {};

        //dimensioni rect
        rect.width = 2;
        rect.height = 2;

        //partenza rect
        rect.originX = 299;
        rect.originY = 299;

        //colori rect iniziale
        rect.red = Math.random() * 255;
        rect.green = Math.random() * 255;
        rect.blue = Math.random() * 255;
        // rect.alpha = Math.random();

        //velocità rect inziale
        rect.speedX = (Math.random() * 0.2) - 0.1;
        rect.speedY = (Math.random() * 0.2) - 0.1;
        
        entities.push(rect);
    }
}

function update() {
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];

        rect.originY += rect.speedY;
        rect.originX += rect.speedX;

        //OGNI VOLTA cambia la sua velocità

        // rect.speedX = (Math.random() * 6) - 3;
        // rect.speedY = (Math.random() * 6) - 3;

        //OGNI TANTO cambia la sua velocità

        const rollX = Math.random();
        const rollY = Math.random();

        //probabilità di cambiare velocità
        if(rollX > 0.8) {
            //la curva e velocità
            const speedDelta = (Math.random() * 0.4) - 0.2;
            rect.speedX += speedDelta;
        }

        if(rollY > 0.8) {
            const speedDelta = (Math.random() * 0.4) - 0.2;
            rect.speedY += speedDelta;
        }

        //RIMBALZO
        if(rect.originX < 0 || rect.originX > 600){ //uscito da destra o sinistra
            rect.speedX *= -1;

        }

        if(rect.originY < 0 || rect.originY > 600){ //uscito da destra o sinistra
            rect.speedY *= -1;
        }

        //RESPAWN
        // rect.originX = rect.originX % 600;
        // rect.originY = rect.originY % 600;
    }
}

function draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(0,0,600,600)

    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        ctx.fillStyle = `rgb(${rect.red},${rect.green},${rect.blue})`;
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
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