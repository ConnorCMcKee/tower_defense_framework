/* CANVAS SETUP
-------------------------------------------------- */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);


/* WINDOW SETUP
-------------------------------------------------- */
var w = window;
var requestAnimationFrame = w.requestAnimationFrame ||
                            w.webkitRequestAnimationFrame ||
                            w.msRequestAnimationFrame ||
                            w.mozRequestAnimationFrame;

/* ACTORS
-------------------------------------------------- */
var actors = [];