"use strict";

export function signature() {
    return "Gemaakt door: Joren Frederickx";
}

drawSpaceInvader();

export function drawSpaceInvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d"); 

    context.fillStyle = 'black';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(350, 50);
    context.lineTo(350, 350);
    context.lineTo(50, 350);
    context.closePath();
    context.fill();


    context.fillStyle = 'lightblue';
    context.beginPath();
    context.moveTo(75, 125);
    context.lineTo(175, 125);
    context.lineTo(175, 175);
    context.lineTo(225, 175);
    context.lineTo(225, 125);
    context.lineTo(325, 125);
    context.lineTo(325, 175);
    context.lineTo(275, 175);
    context.lineTo(275, 225);
    context.lineTo(225, 225);
    context.lineTo(225, 275);
    context.lineTo(275, 275);
    context.lineTo(275, 225);
    context.lineTo(325, 225);
    context.lineTo(325, 325);
    context.lineTo(75, 325);
    context.lineTo(75, 225);
    context.lineTo(125, 225);
    context.lineTo(125, 275);
    context.lineTo(175, 275);
    context.lineTo(175, 225);
    context.lineTo(125, 225);
    context.lineTo(125, 175);
    context.lineTo(75, 175);
    context.closePath();
    context.fill();

}