/**
 * @description Resize margins for mobile browsers.
 * @param {Element} element - The element to resizr the margin of.
 * @param {number} marinLeft - The left margin percent.
 * @param {number} marginRight - The right margin percent.
 */
function optomizeMarginForAgent(element, marinLeft = element.style.marginLeft, marginRight = element.style.marginRight) {
    // Check if the browser is from a mobile device.
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        element.style.marginLeft = `${marinLeft}%`;
        element.style.marginRight = `${marginRight}%`;
    };
};