const senderName = document.getElementById("name");
const returnMethod = document.getElementById("return");
const message = document.getElementById("message");
const send = document.getElementById("send");
const urgent = document.getElementById("urgent");
const important = document.getElementById("important");

senderName.value = returnMethod.value = message.value = "";

const channelID = "936127315124051978";
const token = ["9f0E", "-mLU", "d2PA", "yMcI", "9dbe", "ucCc", "l5pI", "yxkJ", "PkDn", "FpAO", "cIx0", "sbSf", "bSUE", "nR8h", "xepU", "UoqM", "wdYc"];

send.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("POST", `https://discord.com/api/webhooks/${channelID}/${token.join("")}`);
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: null,
        avatar_url: null,
        content: `${urgent.checked ? " @everyone" : ""}${important.checked ? " @here" : ""}` || null,
        embeds: [
            {
                author: {
                    name: senderName.value
                },
                description: message.value,
                footer: {
                    text: returnMethod.value,
                }
            }
        ]
    };

    request.send(JSON.stringify(params));
    request.addEventListener('load', () => {
        if (request.status < 400) {
            [send, senderName, returnMethod, message, urgent, important].forEach(input => input.setAttribute("disabled", "disabled"));
            send.innerHTML = "Sent";
        };
    });
};
