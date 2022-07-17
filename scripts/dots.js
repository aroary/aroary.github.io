const dots = document.getElementById("dots");

window.onresize = () => {
    dots.width = window.innerWidth;
    dots.height = window.innerHeight;
};

var ctx = dots.getContext("2d");
var width = dots.width = window.innerWidth;
var height = dots.height = window.innerHeight;
var circles = [];

for (var i = 0; i < 10; i++) circles.push({ x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height), d: Math.floor(Math.random() * 360) });
dots.onclick = () => circles.push({ x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height), d: Math.floor(Math.random() * 360) });

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

    ctx.strokeStyle = "silver";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(circles[0].x, circles[0].y);
    for (var i = 1; i < circles.length; i++) ctx.lineTo(circles[i].x, circles[i].y);
    ctx.lineTo(circles[0].x, circles[0].y);
    ctx.stroke();

    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "silver";
        ctx.fill();
    });
}, 25);