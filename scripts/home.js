// about hover
document.querySelector("main>div").onmouseover = () => {
    document.querySelectorAll("main>div>h2").forEach(element => element.style.boxShadow = "inset 0 10px 6px -8px var(--theme-color-fg), inset 0 -10px 6px -8px var(--theme-color-fg)");
    document.querySelectorAll("div>p").forEach(element => element.style.boxShadow = "inset 0 0 8px var(--theme-color-fg)");
};
document.querySelector("main>div").onmouseout = () => {
    document.querySelectorAll("main>div>h2").forEach(element => element.style.boxShadow = "inset 0 10px 6px -10px var(--theme-color-fg), inset 0 -10px 6px -10px var(--theme-color-fg)");
    document.querySelectorAll("div>p").forEach(element => element.style.boxShadow = "inset 0 0 6px var(--theme-color-fg)");
};