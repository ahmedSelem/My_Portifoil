$(function () {
    'use strict';

    // Convas Loading Page

    const canvas = document.querySelector(".box-convas canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const c = canvas.getContext("2d");

    const mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2
    };

    addEventListener('mousemove', event => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
    addEventListener('touchstart', e => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }, false);

    let i = 0;
    let j = 0;
    let mouseOld = { x: mouse.x, y: mouse.y };
    function draw() {
        requestAnimationFrame(draw);
        c.fillStyle = 'rgba(255, 255, 255, 0.4)';
        c.fillRect(0, 0, canvas.width, canvas.height);

        mouseOld.x += (mouse.x - mouseOld.x) * 0.05;
        mouseOld.y += (mouse.y - mouseOld.y) * 0.05;
        let x = mouseOld.x + Math.cos(j) * 100;
        let y = mouseOld.y + Math.sin(j) * 100;

        let xx = x + Math.cos(i + j) * 50;
        let yy = y + Math.sin(i + j) * 50;

        c.beginPath();
        c.fillStyle = 'blue';
        c.arc(x, y, 10, 0, Math.PI * 2, true);
        c.fill();
        c.closePath();

        c.beginPath();
        c.fillStyle = 'blue';
        c.arc(xx, yy, 10, 0, Math.PI * 2, true);
        c.fill();
        c.closePath();

        i += 0.08;
        j += 0.05;
    }

    draw();
}());