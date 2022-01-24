const url = document.getElementById("url");
const username = document.getElementById("name");
const pfp = document.getElementById("pfp");
const content = document.getElementById("content");
const embedData = document.getElementById("embedData");
const useEmbed = document.getElementById("embed");
const useJSON = document.getElementById("json");
const formatButton = document.getElementById("format");

const embedTitle = document.getElementById("embedTitle");
const embedURL = document.getElementById("embedURL");
const embedColor = document.getElementById("embedColor");
const embedDescription = document.getElementById("embedDescription");
const embedFooter = document.getElementById("embedFooter");
const embedFooterIcon = document.getElementById("embedFooterIcon");
const embedImage = document.getElementById("embedImage");
const embedThumbnail = document.getElementById("embedThumbnail");
const embedAuthor = document.getElementById("embedAuthor");
const embedAuthorIcon = document.getElementById("embedAuthorIcon");

const error = document.getElementById("error");

var embed = false;
var json = false;
url.value = document.cookie || "";

const parameters = new Proxy(new URLSearchParams(window.location.search), { get: (target, name) => target.get(name) || "" });
if (parameters.send == "true") sendMessage(parameters.webhook, {
    username: parameters.username,
    avatar_url: parameters.avatar,
    content: parameters.content
});
else {
    url.value = parameters.webhook;
    username.value = parameters.username;
    pfp.value = parameters.avatar;
    content.value = parameters.content;
    embedTitle.value = parameters.title;
    embedURL.value = parameters.url;
    embedColor.value = parameters.color;
    embedDescription.value = parameters.description;
    embedFooter.value = parameters.footer;
    embedFooterIcon.value = parameters.footerIcon;
    embedImage.value = parameters.image;
    embedThumbnail.value = parameters.thumbnail;
    embedAuthor.value = parameters.author;
    embedAuthorIcon.value = parameters.authorIcon;
};

function clear() {
    content.value = '';

    if (embed) {
        embedTitle.value = "";
        embedURL.value = "";
        // embedColor.value = "";
        embedDescription.value = "";
        embedFooter.value = "";
        embedFooterIcon.value = "";
        embedImage.value = "";
        embedThumbnail.value = "";
        embedAuthor.value = "";
        embedAuthorIcon.value = "";
    };
};

function sendMessage(webHookURL = "", parameters = null) {
    const valid = validate();
    if (valid) return error.innerHTML = valid;
    else error.innerHTML = "Loading...";

    const request = new XMLHttpRequest();
    request.open("POST", url.value); // request.open("POST", webHookURL || url.value);
    request.setRequestHeader('Content-type', 'application/json');

    const params = parameters || json ? JSON.parse(content.value) : { username: username.value, avatar_url: pfp.value, content: content.value, embeds: [] };

    if (embed) params.embeds.push({
        title: embedTitle.value || null,
        url: embedURL.value || null,
        color: embedColor.value || null,
        description: embedDescription.value || null,
        footer: { text: embedFooter.value || null, icon_url: embedFooterIcon.value || null },
        image: { url: embedImage.value || null },
        thumbnail: { url: embedThumbnail.value || null },
        author: { name: embedAuthor.value || null, icon_url: embedAuthorIcon.value || null, url: null },
        fields: []
    });

    request.send(JSON.stringify(params));
    request.addEventListener('load', () => {
        error.innerHTML = request.status;
        if (request.status < 400) clear();
    });
};

document.getElementById("clear").onclick = clear;
document.getElementById("send").onclick = sendMessage;

function validate() {
    if (!url.value.startsWith("https://discord.com/api/webhooks/")) return "Invalid webhook url";
    if (pfp.value && !pfp.value.startsWith("https://") && !pfp.value.startsWith("http://")) return "invalid Profile url";
    if (!content.value && !embed) return "No data to send";
    if (content.value.length > 2000) return "Content too long";
    if (embed) {
        if (embedColor.value && Number.isNaN(embedColor.value)) return "Color must be a number code";
        if (embedAuthorIcon.value && !embedAuthorIcon.value.startsWith("https://") && !embedAuthorIcon.value.startsWith("http://")) return "Invalid author icon url";
        if (embedImage.value && !embedImage.value.startsWith("https://") && !embedImage.value.startsWith("http://")) return "Invalid image url";
        if (embedThumbnail.value && !embedThumbnail.value.startsWith("https://") && !embedThumbnail.value.startsWith("http://")) return "Invalid thumbnail url";
        if (embedFooterIcon.value && !embedFooterIcon.value.startsWith("https://") && !embedFooterIcon.value.startsWith("http://")) return "Invalid footer icon url";
    };

    return false;
}

function toggleEmbed(to = !embed) {
    embed = to;
    if (embed) embedData.style.display = "block";
    else embedData.style.display = "none";

    if (json && to) {
        json = false;
        content.setAttribute("placeholder", "Content");
        username.style.display = "block";
        pfp.style.display = "block";
    };
};

function toggleJSON(to = !json) {
    json = to;

    if (json) {
        content.setAttribute("placeholder", "JSON");
        username.style.display = "none";
        pfp.style.display = "none";
    } else {
        content.setAttribute("placeholder", "Content");
        username.style.display = "block";
        pfp.style.display = "block";
    };

    toggleEmbed(false);
};

useEmbed.onclick = () => toggleEmbed();

useJSON.onclick = () => toggleJSON();

url.onchange = e => document.cookie = e.target.value;