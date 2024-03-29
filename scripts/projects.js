const projects = document.getElementById("projects");

new Promise((resolve, reject) => {
    const resource = new XMLHttpRequest();
    resource.open('GET', 'https://raw.githubusercontent.com/aroary/aroary.github.io/main/media/projects.json', true);
    resource.onload = () => {
        if (resource.status >= 200 && resource.status < 400) resolve(JSON.parse(resource.responseText));
        else reject(resource.status);
    };
    resource.send();
}).then(resources => {
    resources.forEach((project, id) => {
        const row = document.createElement("tr");
        const icon = document.createElement("td");
        const info = document.createElement("td");

        icon.classList.add("icon");
        info.classList.add("info");

        icon.innerHTML = `<a href="${project.icon.url}"><img src="./${project.icon.image}"></img></a><h5>${project.date || "present"}</h5>`;
        info.innerHTML = `<h2>${project.title}</h2><h3>${project.description}</h3>`;

        project.resources.forEach(resource => info.innerHTML += `<button><a href="${resource.value}">${resource.name}</a></button>`);

        if (id % 2 === 0) {
            row.classList.add("left");
            row.appendChild(icon);
            row.appendChild(info);
        } else {
            row.classList.add("right");
            row.appendChild(info);
            row.appendChild(icon);
        }

        projects.appendChild(row);

        // Bandaid
        setFooter();

        if (id < resources.length - 1) {
            const spacer = document.createElement("tr");
            spacer.innerHTML = "<td><hr></td><td><hr></td>";

            projects.appendChild(spacer);
        }
    });
}).catch(console.log);
