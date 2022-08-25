const notify = {
    success(element, message = "success") {
        element.classList.remove("fail");
        element.classList.remove("message");
        element.classList.add("success");
        element.innerHTML = message;
    },
    message(element, message) {
        element.classList.remove("success");
        element.classList.remove("fail");
        element.classList.add("message");
        element.innerHTML = message;
    },
    fail(element, message = "fail") {
        element.classList.remove("message");
        element.classList.remove("success");
        element.classList.add("fail");
        element.innerHTML = message;
    }
};