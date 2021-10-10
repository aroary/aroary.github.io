document.addEventListener("load", () => {
    [...document.getElementsByTagName("a")].forEach(v => {
        v.style.display = "block";
    });
});