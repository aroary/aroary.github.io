switch (window.location.pathname) {
    case "/home":
        window.location.replace(window.location.origin + "/home.html");
        break;

    case "/contact":
        window.location.replace(window.location.origin + "/contact.html");
        break;

    case "/bypass":
        window.location.replace("https://yeshivaschools.github.io/bypass/bypass.html");
        break;

    case "/server":
        window.location.replace("https://discord.gg/d39DnYurrU");
        break;

    default:
        window.location.replace(window.location.origin);
        break;
};