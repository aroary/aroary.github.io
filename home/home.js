var url = "https://api.github.com/users/aroary";
var data = new XMLHttpRequest();
data.open("GET", url);
data.setRequestHeader("Accept", "application/vnd.github.v3+json");
data.onreadystatechange = function () {
    if (data.readyState === 4) {
        const userData = JSON.parse(data.responseText);
        const dataNode = document.getElementById("data");
        if (userData.bio) {
            const head = document.createElement("h4");
            const body = document.createElement("p");
            head.innerHTML = "Bio";
            body.innerHTML = userData.bio;
            dataNode.appendChild(head);
            dataNode.appendChild(body);
        } else console.log("No bio");
        if (userData.email) {
            const head = document.createElement("h4");
            const body = document.createElement("p");
            head.innerHTML = "Email";
            body.innerHTML = userData.email;
            dataNode.appendChild(head);
            dataNode.appendChild(body);
        } else console.log("No email");
    };
};
data.send();