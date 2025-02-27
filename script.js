const canvas = document.getElementById('my-canvas');
// console.log(canvas);
const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(10, 10, 100, 50); //coordinate-origine(10,10) e partendo da origine coordinate-destinazione(100,50)

// ctx.fillStyle = 'green';
// ctx.fillRect(250, 275, 100, 50);

// ctx.strokeStyle = 'crimson';
// ctx.lineWidth = 4;
// ctx.strokeRect(350,400,10,50);

// for (let i = 0; i < 100; i++) {
//     const originX = Math.random() * 600;
//     const originY = Math.random() * 600;
//     const width = Math.random() * 200;
//     const height = Math.random() * 200;

//     const red = Math.random() * 255;
//     const green = Math.random() * 255;
//     const blue = Math.random() * 255;
//     const alpha = Math.random();

//     ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`
//     ctx.fillRect(originX,originY,width,height);
// }

interval = 200;

setInterval(() => {
    ctx.fillStyle = 'rgba(255,255,255,0.05)'; //alpha più piccolo, storico più lento
    ctx.fillRect(0, 0, 600, 600);

    // const width = Math.random() * 200;
    // const height = Math.random() * 200;

    // const originX = Math.random() * (600 - width);
    // const originY = Math.random() * (600 - height);

    const side = Math.random() * 200;
    const originX = Math.random() * (600 - side);
    const originY = Math.random() * (600 - side);

    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    const alpha = Math.random();

    ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`;

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX+(side/2), originY+(side/2));
    ctx.lineTo(originX-(side/2), originY+(side/2));
    ctx.lineTo(originX, originY);
    ctx.closePath();

    ctx.fill();

    // ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`;
    // ctx.fillRect(originX, originY, width, height);

}, interval); //ogni millisec cosa fare