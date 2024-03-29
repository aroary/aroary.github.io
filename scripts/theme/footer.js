function setFooter() {
    const items = [
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    ];

    document.getElementsByTagName("footer")[0].style.top = `${Math.max(...items) + 50}px`;
};

setFooter();

window.onresize = window.onload = () => {
    document.getElementsByTagName("footer")[0].style.display = "none";
    setFooter();
    document.getElementsByTagName("footer")[0].style.display = "block";
};