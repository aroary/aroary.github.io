optomizeMarginForAgent(document.getElementsByTagName("main")[0], 10, 10);

[
    { link: "https://github.com/aroary/", img: "https://gpvc.arturio.dev/aroary", alt: "Profile views" },
    { link: "https://github.com/aroary", img: "https://img.shields.io/badge/school-student-white.svg", alt: "Generic badge" },
    { link: "", img: "https://img.shields.io/badge/Markdown-000000?style=1&logo=markdown&logoColor=white", alt: "Markdown" },
    { link: "", img: "https://img.shields.io/badge/HTML5-E34F26?style=1&logo=html5&logoColor=white", alt: "HTML" },
    { link: "", img: "https://img.shields.io/badge/CSS3-1572B6?style=1&logo=css3&logoColor=white", alt: "CSS" },
    { link: "https://www.python.org/", img: "https://img.shields.io/badge/Python-14354C?style=1&logo=python&logoColor=white", alt: "Python" },
    { link: "https://www.javascript.com/", img: "https://img.shields.io/badge/JavaScript-F7DF1E?style=1&logo=javascript&logoColor=black", alt: "JavaScript" },
    { link: "https://nodejs.org/en/", img: "https://img.shields.io/badge/Node.js-43853D?style=1&logo=node.js&logoColor=white", alt: "Node js" },
    { link: "https://expressjs.com/", img: "https://img.shields.io/badge/Express.js-404D59?style=1&logo=express&logoColor=black", alt: "Express js" },
    { link: "https://socket.io/", img: "https://img.shields.io/badge/Socket.io-808080?style=1&logo=socket.io&logoColor=black", alt: "Socket io" },
    { link: "https://www.electronjs.org/", img: "https://img.shields.io/badge/Electron-47848f?style=1&logo=electron&logoColor=black", alt: "Electron js" },
    { link: "", img: "https://img.shields.io/badge/puppeteer-ffffff?style=1&logo=puppeteer", alt: "Puppeteer" },
    { link: "", img: "https://img.shields.io/badge/Stack%20overflow-f0f0f0?style=1&logo=stack-overflow", alt: "Stack Overflow" },
    { link: "https://github.com/aroary", img: "https://img.shields.io/badge/github-FFFFFF?style=1&logo=github&logoColor=black", alt: "Github" },
    { link: "", img: "https://img.shields.io/badge/Git-413932?style=1&logo=git", alt: "Git" },
    { link: "", img: "https://img.shields.io/badge/npm-FFFFFF?style=1&logo=npm", alt: "NPM" },
    { link: "", img: "https://img.shields.io/badge/pypi-ffffff?style=1&logo=pypi", alt: "PYPI" },
    { link: "", img: "https://img.shields.io/badge/Docker-fff?style=1&logo=docker", alt: "Docker" },
    { link: "https://discord.com/", img: "https://img.shields.io/badge/Discord-5865f2?style=1&logo=discord&logoColor=white", alt: "Discord" },
    { link: "https://zoom.us/", img: "https://img.shields.io/badge/Zoom-fff0f0?style=1&logo=zoom", alt: "Zoom" },
    { link: "", img: "https://img.shields.io/badge/Hangouts-ffffff?style=1&logo=google-hangouts", alt: "Hangouts" },
    { link: "", img: "https://img.shields.io/badge/Meet-ffffff?style=1&logo=google-meet", alt: "Meet" },
    { link: "", img: "https://img.shields.io/badge/Chat-fff?style=1&logo=google-chat", alt: "Chat" },
    { link: "https://code.visualstudio.com/", img: "https://img.shields.io/badge/visual%20studio%20code-303030?style=1&logo=visual-studio-code&logoColor=blue", alt: "Visual Studio Code" },
    { link: "https://replit.com/@aroary", img: "https://img.shields.io/badge/replit-0e1525?style=1&logo=replit", alt: "Replit" },
    { link: "https://www.gimp.org/", img: "https://img.shields.io/badge/GIMP-0e2426?style=1&logo=gimp&logoColor=grey", alt: "Gimp" },
    { link: "https://www.udemy.com/", img: "https://img.shields.io/badge/Udemy-fff?style=1&logo=udem", alt: "Udemy" },
    { link: "https://www.codingame.com/profile/e331ea266d81381fea8cf6add9f930c88190144", img: "https://img.shields.io/badge/Codingame-131c25?style=1&logo=codingame", alt: "Codingame" },
    { link: "https://www.microsoft.com/en-us/windows/", img: "https://img.shields.io/badge/Windows-0067b8?style=1&logo=windows", alt: "Windows" },
    { link: "https://www.mozilla.org/en-US/firefox/new", img: "https://img.shields.io/badge/Firefox-203FB6?style=1&logo=firefox", alt: "Firefox" },
    { link: "", img: "https://img.shields.io/badge/Google-fff?style=1&logo=google", alt: "Google" },
    { link: "", img: "https://img.shields.io/badge/Assistant-fff?style=1&logo=google-assistant", alt: "Google Assistant" }
].forEach(badge => {
    const link = document.createElement("a");
    link.href = badge.link;
    const img = document.createElement("img");
    img.src = badge.img;
    img.alt = badge.alt;
    link.appendChild(img);
    document.getElementsByTagName("main")[0].appendChild(link);
});