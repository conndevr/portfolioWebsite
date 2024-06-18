

const params = new URLSearchParams(window.location.search)
const detailId = params.get('id')

const detailCont = document.querySelector('.detail-container')

console.log(detailId)
function theDetailsOfProject(project) {
    let githubLink = project.github ? `<a class="detail-container__content" href="${project.github}" target="_blank">Github Repository</a>` :'';
    return `
    <img class="" src="${project.image}" alt="">
    <h2 class="detail-container__content">${project.title}</h2>
    <p class="detail-container__content">${project.description}</p>
    ${githubLink}`
}

const project = projects.find(p => p.id === parseInt(detailId, 10));

if (project) {
    detailCont.innerHTML = theDetailsOfProject(project);
} else {
    detailCont.innerHTML = '<p>Project not found.</p>';
}