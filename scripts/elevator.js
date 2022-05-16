document.getElementById("elevator").src = "./media/elevator/open.gif";
[...document.getElementsByTagName("a")].forEach(element => {
    element.onclick = e => {
        e.preventDefault();
        document.getElementById("elevator").src = "./media/elevator/close.gif";
        setTimeout(() => {
            window.location.assign(element.href);
            document.getElementById("elevator").src = "./media/elevator/open.gif";
        }, 4000);
    };
});