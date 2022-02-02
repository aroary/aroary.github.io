const items = [
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight   
];

document.getElementsByTagName("footer")[0].style.top = `${Math.max(...items)}px`;