const dots = document.getElementById("dots");

var color = "silver";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) color = "darknavy";

window.onresize = () => {
    dots.width = window.innerWidth;
    dots.height = window.innerHeight;
};

const consistency = Math.floor(Math.random() * 9) + 1

var ctx = dots.getContext("2d");
var width = dots.width = window.innerWidth;
var height = dots.height = window.innerHeight;
var circles = [];

for (var i = 0; i < consistency * 10; i++) circles.push({ x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height), d: Math.floor(Math.random() * 360) });
dots.onclick = () => circles.push({ x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height), d: Math.floor(Math.random() * 360) });

ctx.strokeStyle = color;
ctx.stroke();

setInterval(() => {
    ctx = dots.getContext("2d");
    width = dots.width;
    height = dots.height;

    ctx.clearRect(0, 0, width, height);

    circles = circles.map(circle => {
        circle.d += Math.floor(Math.random() * 20) - 10;
        circle.x += Math.cos(circle.d * Math.PI / 180) * 2;
        circle.y += Math.sin(circle.d * Math.PI / 180) * 2;

        if (circle.x > width) circle.x = Math.floor(Math.random() * width);
        if (circle.x < 0) circle.x = Math.floor(Math.random() * width);
        if (circle.y > height) circle.y = Math.floor(Math.random() * height);
        if (circle.y < 0) circle.y = Math.floor(Math.random() * height);

        return circle;
    });

    // Connect in order
    // ctx.beginPath();
    // ctx.moveTo(circles[0].x, circles[0].y);
    // for (var i = 1; i < circles.length; i++) ctx.lineTo(circles[i].x, circles[i].y);
    // ctx.lineTo(circles[0].x, circles[0].y);
    // ctx.stroke();

    // Connect to close
    circles.forEach(circle => {
        ctx.beginPath();
        ctx.moveTo(circle.x, circle.y);
        circles.filter(c => distance(c.x, c.y, circle.x, circle.y) < width / consistency).forEach(c => ctx.lineTo(c.x, c.y));
        ctx.stroke();
    });

    // Connect to distant
    // circles.forEach(circle => {
    //     ctx.beginPath();
    //     ctx.moveTo(circle.x, circle.y);
    //     circles.filter(c => distance(c.x, c.y, circle.x, circle.y) > (width / consistency) * ((consistency - 1) || 1)).forEach(c => ctx.lineTo(c.x, c.y));
    //     ctx.stroke();
    // });

    // Connect to all
    // circles.forEach(circle => {
    //     ctx.beginPath();
    //     ctx.moveTo(circle.x, circle.y);
    //     circles.forEach(c => ctx.lineTo(c.x, c.y));
    //     ctx.stroke();
    // });

    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "silver";
        ctx.fill();
    });
}, 50);

function distance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
};