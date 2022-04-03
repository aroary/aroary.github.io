optomizeMarginForAgent(document.getElementsByTagName("main")[0], 10, 10);

// about hover
document.querySelector("main>div").onmouseover = () => {
    document.querySelectorAll("main>div>h2").forEach(element => element.style.boxShadow = "inset 0 10px 6px -8px black, inset 0 -10px 6px -8px black");
    document.querySelectorAll("div>p").forEach(element => element.style.boxShadow = "inset 0 0 8px black");
};
document.querySelector("main>div").onmouseout = () => {
    document.querySelectorAll("main>div>h2").forEach(element => element.style.boxShadow = "inset 0 10px 6px -10px black, inset 0 -10px 6px -10px black");
    document.querySelectorAll("div>p").forEach(element => element.style.boxShadow = "inset 0 0 6px black");
};