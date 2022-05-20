const animations = document.getElementById("animations");

var target = null;

if (animations) {
    if (document.cookie.includes("animations=true")) animations.checked = true;
    else animations.checked = false;

    animations.ontoggle = e => {
        const time = new Date();
        time.setTime(time.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = `animations=${e.target.checked}; ${time.toUTCString()}`;
    };
};

if (document.getElementById("elevator")) {
    document.cookie.includes("animations=true") && (document.getElementById("elevator").src = "./media/elevator/open.gif");
    [...document.getElementsByTagName("a")].forEach(element => {
        element.onclick = e => {
            if (document.cookie.includes("animations=true")) {
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
        };
    });
};