const projects = new XMLHttpRequest();
projects.open('GET', './media/projects.json', true);
projects.onload = () => {
    if (projects.status >= 200 && projects.status < 400) {
        const container = document.getElementById('projects');
        JSON.parse(projects.responseText).forEach(project => {
            const div = document.createElement('div');
            div.classList.add('project');

            const title = document.createElement('h2');
            title.innerHTML = project.title;

            const description = document.createElement('p');
            description.innerHTML = project.description;

            const info = document.createElement('div');
            info.appendChild(title);
            info.appendChild(document.createElement("hr"));
            info.appendChild(description);

            project.resources.forEach(resource => {
                const link = document.createElement('a');
                link.href = resource.url;
                link.target = '_blank';
                link.rel = "noopener noreferrer";
                link.innerHTML = resource.name;

                const button = document.createElement('button');
                button.appendChild(link);

                info.appendChild(button);
            });

            div.appendChild(info);

            const image = document.createElement('img');
            image.src = project.icon.image;

            const imageLink = document.createElement('a');
            imageLink.href = project.icon.url;
            imageLink.target = '_blank';
            imageLink.rel = "noopener noreferrer";
            imageLink.appendChild(image);

            div.appendChild(imageLink);

            container.appendChild(div);
        });
    };
};
projects.send();