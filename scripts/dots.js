const dots = document.getElementById("dots");

const color = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "black" : "silver";
const consistency = Math.floor(Math.random() * 4) + 6

var ctx = dots.getContext("2d");
var width = dots.width = window.innerWidth;
var height = dots.height = window.innerHeight;
var x = 0, y = 0;
var rect = dots.getBoundingClientRect();
var circles = [];

window.onresize = () => {
    width = dots.width = window.innerWidth;
    height = dots.height = window.innerHeight;
};

for (var i = 0; i < consistency * 10; i++) circles.push({ x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height), d: Math.floor(Math.random() * 360) });
dots.onclick = e => {
    circles.shift();
    circles.push({
        x: (e.clientX - rect.left) / (rect.right - rect.left) * dots.width,
        y: (e.clientY - rect.top) / (rect.bottom - rect.top) * dots.height,
        d: Math.floor(Math.random() * 360)
    });
};

dots.onmousemove = e => {
    x = e.offsetX;
    y = e.offsetY;
}

ctx.strokeStyle = color;
ctx.stroke();

setInterval(() => {
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

    // Add mouse position
    const points = [{
        x: (x - rect.left) / (rect.right - rect.left) * dots.width,
        y: (y - rect.top) / (rect.bottom - rect.top) * dots.height,
    }, ...circles];

    // Draw lines
    points.forEach(circle => {
        circles.filter(c => distance(c.x, c.y, circle.x, circle.y) < width / consistency).forEach(c => {
            ctx.beginPath();
            ctx.moveTo(circle.x, circle.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
        });
    });

    // Draw circle
    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    });
}, 50);

function distance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
};