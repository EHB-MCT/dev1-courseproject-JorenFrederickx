"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    const rows = 50; // Set the number of rows of circles
    const columns = 50; // Set the number of columns of circles
    const spacing = 20; // Distance between circles

    context.fillStyle = 'black';
    context.strokeStyle = 'red';

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < columns; i++) {
            let x = i * spacing + Utils.randomNumber(-5, 5);
            let y = j * spacing + Utils.randomNumber(-5, 5);
            let radius = Utils.randomNumber(5, 15);
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fill();
            context.stroke();
        }
    }
}