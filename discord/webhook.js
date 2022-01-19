function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", document.getElementById("url").value);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: document.getElementById("name").value,
        avatar_url: document.getElementById("pfp").value,
        content: document.getElementById("content").value
    };

    request.send(JSON.stringify(params));
}

document.getElementById("url").value = document.cookie || "";

document.getElementById("url").onchange = e => document.cookie = e.target.value;