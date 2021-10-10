document.addEventListener("load", () => {
    [...document.getElementsByTagName("main")[0].getElementsByTagName("a")].forEach(v => {
        v.style.display = "block";
    });
});