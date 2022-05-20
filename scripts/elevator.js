var target = null;

if (document.getElementById("elevator")) {
    document.getElementById("elevator").src = "./media/elevator/open.gif";
    [...document.getElementsByTagName("a")].forEach(element => {
        element.onclick = e => {
            e.preventDefault();
            document.getElementById("elevator").src = "./media/elevator/close.gif";
            if (target === element.href) window.location.assign(target);
            else {
                target = element.href;
                setTimeout(() => {
                    window.location.assign(target);
                    document.getElementById("elevator").src = "./media/elevator/open.gif";
                }, 4000);
            };
        };
    });
};