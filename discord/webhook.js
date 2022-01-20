class Embed {
    constructor () {
        this.title = "";
        this.description = "";
        this.url = "";
        this.color = "";
        this.footer = {};
        this.image = {};
        this.thumbnail = {};
        this.author = {};
        this.fields = [];
    };

    setTitle(title) {
        this.title = title;
        return this;
    };

    setDescription(description) {
        this.description = description;
        return this;
    };

    setURL(url) {
        this.url = url;
        return this;
    };

    setColor(color) {
        this.color = color;
        return this;
    };

    setFooter(footer, icon) {
        this.footer = { text: footer, icon_url: icon };
        return this;
    };

    setImage(image) {
        this.image = { url: image };
        return this;
    };

    setThumbnail(thumbnail) {
        this.thumbnail = { url: thumbnail };
        return this;
    };

    setAuthor(author, icon, url = null) {
        this.author = { name: author, icon_url: icon, url: url };
        return this;
    };

    addField(name, value, inline = false) {
        this.fields.push({ name: name, value: value, inline: inline });
        return this;
    };

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            url: this.url,
            color: this.color,
            footer: this.footer,
            image: this.image,
            thumbnail: this.thumbnail
        };
    };
};

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

function clear() {
    content.value = '';

    if (embed) {
        embedTitle.value = "";
        embedURL.value = "";
        embedColor.value = "";
        embedDescription.value = "";
        embedFooter.value = "";
        embedFooterIcon.value = "";
        embedImage.value = "";
        embedThumbnail.value = "";
        embedAuthor.value = "";
        embedAuthorIcon.value = "";
    };
};

document.getElementById("clear").onclick = clear;

function sendMessage() {
    const valid = validate();
    if (valid) return error.innerHTML = valid;
    else error.innerHTML = "";

    const request = new XMLHttpRequest();
    request.open("POST", url.value);
    request.setRequestHeader('Content-type', 'application/json');

    const params = json ? JSON.parse(content.value) : { username: username.value, avatar_url: pfp.value, content: content.value, embeds: [] };

    if (embed) {
        const embed = new Embed()
            .setTitle(embedTitle.value || null)
            .setDescription(embedDescription.value || null)
            .setURL(embedURL.value || null)
            .setColor(embedColor.value || null)
            .setFooter(embedFooter.value || null, embedFooterIcon.value || null)
            .setImage(embedImage.value || null)
            .setThumbnail(embedThumbnail.value || null)
            .setAuthor(embedAuthor.value, embedAuthorIcon.value || null);

        params.embeds.push(embed.toJSON());
    };

    request.send(JSON.stringify(params));
    request.addEventListener('load', () => {
        error.innerHTML = request.status;
        if (request.status < 400) clear();
    });
};

function validate() {
    if (!url.value.startsWith("https://discord.com/api/webhooks/")) return "Invalid webhook url";
    if (pfp.value && !pfp.value.startsWith("https://") && !pfp.value.startsWith("http://")) return "invalid Profile url";
    if (!content.value && !embed) return "No data to send";
    if (content.value.length > 2000) return "Content too long";
    if (embed) {
        if (embedColor.value && embedColor.value.length != 6 && embedColor.value.length != 7) return "Color must be a hex color code";
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
        formatButton.style.display = "none";
    };
};

function toggleJSON(to = !json) {
    json = to;

    if (json) {
        content.setAttribute("placeholder", "JSON");
        username.style.display = "none";
        pfp.style.display = "none";
        formatButton.style.display = "inline";
    } else {
        content.setAttribute("placeholder", "Content");
        username.style.display = "block";
        pfp.style.display = "block";
        formatButton.style.display = "none";
    };

    toggleEmbed(false);
};

useEmbed.onclick = () => toggleEmbed();

useJSON.onclick = () => toggleJSON();

url.onchange = e => document.cookie = e.target.value;