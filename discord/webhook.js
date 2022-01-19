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