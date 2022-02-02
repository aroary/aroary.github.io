if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (document.getElementsByTagName("main")[0].style.marginLeft) document.getElementsByTagName("main")[0].style.marginLeft = `${Number.parseInt(document.getElementsByTagName("main")[0].style.marginLeft.replace("%", "")) - 20}%`;
    if (document.getElementsByTagName("main")[0].style.marginRight) document.getElementsByTagName("main")[0].style.marginRight = `${Number.parseInt(document.getElementsByTagName("main")[0].style.marginRight.replace("%", "")) - 20}%`;
};