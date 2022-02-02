function optomizeMarginForAgent(element, marinLeft, marginRight) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        element.style.marginLeft = `${marinLeft}%`;
        element.style.marginRight = `marginRight}%`;
    };
};