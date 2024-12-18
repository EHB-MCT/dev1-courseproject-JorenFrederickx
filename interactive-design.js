"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

const canvas = document.querySelector("canvas");
const width = canvas.width;
const height = canvas.height;


const elements = [];
const elementCount = 200;

for (let i = 0; i < elementCount; i++) {
    elements.push({
        x: Utils.randomNumber(0, width),
        y: Utils.randomNumber(0, height),
        radius: Utils.randomNumber(5, 15),
        dx: Utils.randomNumber(-2, 2),
        dy: Utils.randomNumber(-2, 2),
        color: `rgb(${Utils.randomNumber(100, 255)}, ${Utils.randomNumber(100, 255)}, ${Utils.randomNumber(100, 255)})`
    });
}

canvas.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    elements.forEach((element) => {
        const distance = Math.hypot(element.x - mouseX, element.y - mouseY);
        if (distance < 100) {
            element.radius = Math.min(30, element.radius + 1);
        } else {
            element.radius = Math.max(5, element.radius - 0.5);
        }
    });
});

animate();

function animate() {
    context.clearRect(0, 0, width, height);
    draw();
    requestAnimationFrame(animate);                        
}

function draw() {
    context.lineWidth = 2;
    elements.forEach((element) => {
        element.x += element.dx;
        element.y += element.dy;

        if (element.x <= 0 || element.x >= width) element.dx *= -1;
        if (element.y <= 0 || element.y >= height) element.dy *= -1;

        context.fillStyle = element.color;
        context.strokeStyle = "white";
        context.beginPath();
        context.arc(element.x, element.y, element.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    });
}
