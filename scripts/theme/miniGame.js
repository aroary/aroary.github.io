var ready = false, score = 1, count = 0;

const info = document.createElement("span");
info.id = "game_info";
info.innerHTML = "Click to play";
info.onclick = initiate;
document.body.appendChild(info);

function initiate() {
    document.onclick = createTarget;
    setTimeout(() => ready = true, 100);
    info.onclick = null;
};

function createTarget(event) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerHTML = "";
    bubble.style.width = bubble.style.height = 50 + "px";
    bubble.style.top = (event.pageY - 25) + "px";
    bubble.style.left = (event.pageX - 25) + "px";
    document.body.appendChild(bubble);
    setTimeout(() => {
        bubble.remove();
    }, ready ? 2000 : 200);

    const traget = [
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div")
    ];

    traget.map((ring, size) => {
        size++;
        ring.classList.add("target");
        ring.style.top = (event.pageY - size * 5) + "px";
        ring.style.left = (event.pageX - size * 5) + "px";
        ring.style.width = ring.style.height = size * 10 + "px";
        ring.style.zIndex = traget.length - size;
        ring.title = size - 1 || "BULLSEYE!";

        ring.onclick = () => {
            score -= 1;
            console.log(ring.title, score);
        };
    });

    traget[0].style.backgroundColor = traget[2].style.backgroundColor = "red";
    traget[1].style.backgroundColor = traget[3].style.backgroundColor = "white";

    const rings = document.createElement("div");
    rings.title = "Check the console for your score!";
    rings.onclick = () => {
        score += 2;
        count++;
        rings.remove();
        setTimeout(() => ready = true, 100);
    };

    traget.forEach(ring => rings.appendChild(ring));

    if (ready) setTimeout(() => document.body.appendChild(rings), 200);
    ready = false;

    info.innerHTML = `Score ${score} Count ${count}`;
};