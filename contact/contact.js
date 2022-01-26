const senderName = document.getElementById("name");
const returnMethod = document.getElementById("return");
const message = document.getElementById("message");
const send = document.getElementById("send");

const channelID = "935944333172039742";
const token = "AKsC-9tZzwEflg7n7xBT--BAAnWF32wlZC1rdjYFKlA2rfr1ifvibzSlSDGg7qhsaQDH";

send.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("POST", `https://discord.com/api/webhooks/${channelID}/${token}`);
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: null,
        avatar_url: null,
        content: null,
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
    request.addEventListener('load', () => { });
};