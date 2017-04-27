/**
 * Created by faguo on 17-4-26.
 */
"use strict";
function drawAxis(canvas, width, height) {
    var context = canvas.getContext('2d');
    context.strokeStyle = '#cccccc';
    context.beginPath();
    context.moveTo(width, height / 2);
    context.lineTo(0, height / 2);
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.stroke();
}
function linearspace(start, end, count) {
    var a = [];
    var delta = (end - start) / count;
    for (var i = 0; i < count; i++) {
        a.push(start + i * delta);
    }
    return a;
}
function apply(f, X) {
    var a = [];
    for (var i = 0; i < X.length; i++) {
        a.push(f(X[i]));
    }
    return a;
}
function transformer(width, height) {
    var wr = width / 4;
    var hr = height / 4;
    return function transform(x, y) {
        var _x = (x + 2) * wr;
        var _y = height - (y + 2) * hr;
        return [_x, _y];
    };
}
function plotFunction(canvas, f, color) {
    if (color === void 0) { color = "#cccccc"; }
    var X = linearspace(-2, 2, 100);
    var Y = apply(f, X);
    var context = canvas.getContext('2d');
    context.strokeStyle = color;
    var width = canvas.width;
    var height = canvas.height;
    var transform = transformer(width, height);
    context.beginPath();
    var _a = transform(X[0], Y[0]), x = _a[0], y = _a[1];
    context.moveTo(x, y);
    for (var i = 1; i < X.length; i++) {
        _b = transform(X[i], Y[i]), x = _b[0], y = _b[1];
        context.lineTo(x, y);
    }
    context.stroke();
    var _b;
}
var width = 800;
var height = 800;
var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
drawAxis(canvas, width, height);
var f = function (x) { return x * x; };
plotFunction(canvas, f, '#aa1a1a');
var f1 = function (x) { return Math.log(x); };
plotFunction(canvas, f1, '#1d22aa');
var f2 = function (x) { return -Math.log(x); };
plotFunction(canvas, f2, '#18aa24');
