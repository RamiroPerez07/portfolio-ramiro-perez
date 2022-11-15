const Projects = [
    {
        id: 1,
        name: "Racademy Website",
        description: "",
        url: "https://racademy-zeta.vercel.app/",
        img: "./img/racademy-website.PNG",
        technologies: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        id: 2,
        name: "Ramusic",
        description: "",
        url: "https://ramusic-music-app.vercel.app/",
        img: "./img/ramusic.PNG",
        technologies: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        id: 3,
        name: "Nucba Zappi",
        description: "",
        url: "https://food-market-coral.vercel.app/",
        img: "./img/nucbazappi.PNG",
        technologies: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        id: 4,
        name: "Guitar Chords App",
        description: "",
        url: "https://guitar-chords-app.vercel.app/",
        img: "./img/guitar-chords.PNG",
        technologies: ["HTML", "CSS", "JAVASCRIPT"]
    }
]

//variables

//contenedores
const projectContainer = document.getElementById("project-container")
const categoryContainer = document.getElementById("category-container")
let categoriesCards = document.getElementsByClassName("category-card")
categoriesCards = [...categoriesCards]


function createHtmlProjectCard(project){
    return `
    <div class="project-card" style="background-image: url('${project.img}');">
        <div class="project-info">
            <h3 class="project-name">${project.name}</h3>
            <div class="technologies">
                <div class="img-technologie html"></div>
                <div class="img-technologie css"></div>
                <div class="img-technologie js"></div>
            </div>
        </div>
    </div>
    `
}

function renderProjectsInProjectContainer(arrayOfProjects){
    const html = arrayOfProjects.map(project =>{
        return createHtmlProjectCard(project);
    }).join("");
    projectContainer.innerHTML = html;
}  

function selectCategory(event){
    let categoryCard;
    if (!event.target.parentElement.classList.contains("category-card") && !event.target.classList.contains("category-card")){
        return;  
    }else if (event.target.parentElement.classList.contains("category-card")){
        categoryCard = event.target.parentElement;
    }else{
        categoryCard = event.target;
    }
    const categoryValue = categoryCard.dataset.language
    const filterProjects = filterProjectByTag(categoryValue);
    renderProjectsInProjectContainer(filterProjects);

    categoriesCards.forEach(card =>{
        if (card.classList.contains("selected-category")){
            card.classList.remove("selected-category")
        }
    })
    categoryCard.classList.add("selected-category");
}

function filterProjectByTag(tag){
    const filterProjects = Projects.filter(project =>{
        return project.technologies.includes(tag)
    })
    return filterProjects;
}

function init(){
    renderProjectsInProjectContainer(Projects);
    categoryContainer.addEventListener("click", selectCategory)
}

init()