/**
 * Created by faguo on 17-4-26.
 */
"use strict";
function drawAxis(canvas: HTMLCanvasElement, width: number, height: number) {
    let context: CanvasRenderingContext2D = canvas.getContext('2d');
    context.strokeStyle = '#cccccc';
    context.beginPath();
    context.moveTo(width, height / 2);
    context.lineTo(0, height / 2);
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.stroke();
}

function linearspace(start: number, end: number, count: number) {
    let a: Array<number> = [];
    let delta: number = (end - start) / count;
    for (let i: number = 0; i < count; i++) {
        a.push(start + i * delta);
    }
    return a;
}

function apply(f: (x: number) => number, X: Array<number>) {
    let a: Array<number> = [];
    for (let i: number = 0; i < X.length; i++) {
        a.push(f(X[i]));
    }
    return a;
}

function transformer(width: number, height: number): (x: number, y: number) => [number, number] {
    let wr: number = width / 4;
    let hr: number = height / 4;
    return function transform(x: number, y: number): [number, number] {
        let _x: number = (x+2)*wr;
        let _y: number = height - (y + 2) * hr;
        return [_x, _y];
    }
}

function plotFunction(canvas: HTMLCanvasElement, f: (x: number) => number, color: string = "#cccccc") {
    let X: Array<number> = linearspace(-2, 2, 100);
    let Y: Array<number> = apply(f, X);
    let context: CanvasRenderingContext2D = canvas.getContext('2d');
    context.strokeStyle = color;
    let width: number = canvas.width;
    let height: number = canvas.height;
    let transform: (x: number, y: number) => [number, number] = transformer(width, height);
    context.beginPath();
    let [x, y]=transform(X[0], Y[0]);
    context.moveTo(x, y);
    for (let i = 1; i < X.length; i++) {
        [x, y] = transform(X[i], Y[i]);
        context.lineTo(x, y);
    }
    context.stroke();
}

let width: number = 800;
let height: number = 800;
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

canvas.width = width;
canvas.height = height;
drawAxis(canvas, width, height);
let f: (x: number) => number = (x) => x*x;
plotFunction(canvas, f, '#aa1a1a');
let f1: (x: number) => number = (x) =>Math.log(x);
plotFunction(canvas, f1, '#1d22aa');
let f2: (x: number) => number = (x) =>-Math.log(x);
plotFunction(canvas, f2, '#18aa24');
