function setFooter() {
    const items = [
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    ];

    document.getElementsByTagName("footer")[0].style.bottom = `${Math.max(...items)}px`;
};

setFooter();

window.onresize = window.onload =  () => setFooter();