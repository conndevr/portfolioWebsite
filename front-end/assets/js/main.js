const projectsContainer = document.querySelector('.project-container__projects');

function getDetailsOfProject(project) {
    return `
    
    <section class="project-container__projects__project">
    <a href="./detail.html?id=${project.id}">
        <h2 class="recipe-Header">${project.title}</h2>
        </a> 
    </section>
    `;
}

function mapTheDetailsOfProject(projects) {
    return projects.map((project) => getDetailsOfProject(project))
}

projectsContainer.innerHTML = mapTheDetailsOfProject(projects).join('');
