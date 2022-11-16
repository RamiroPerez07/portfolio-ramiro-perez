//variables

//elementos
const navbar = document.getElementById("navbar")

//contenedores
const projectContainer = document.getElementById("project-container");
const categoryContainer = document.getElementById("category-container");
let categoriesCards = document.getElementsByClassName("category-card");
categoriesCards = [...categoriesCards];

//botones
const showMoreProjectsBtn = document.getElementById("show-more-projects");
const goToPortfolioBtn = document.getElementById("portfolio-btn");
const burguerBtn = document.getElementById("burguer-menu-btn")

//controlador
ProjectViewController = {
    index: 0,
    limit: splitProjects(Projects,4).length,
}

function createHtmlProjectCard(project){
    return `
    <div class="project-card" style="background-image: url('${project.img}');" data-id=${project.id}>
        <div class="project-info">
            <h3 class="project-name">${project.name}</h3>
            <div class="technologies">
                ${project.technologies.includes("HTML")?'<div class="img-technologie html"></div>':""}
                ${project.technologies.includes("CSS")?'<div class="img-technologie css"></div>':""}
                ${project.technologies.includes("JAVASCRIPT")?'<div class="img-technologie js"></div>':""}
            </div>
            <p class="project-description">${project.description}</p>
        </div>
    </div>
    `
}

function renderProjectsInProjectContainer(arrayOfProjects, index=0){
    /*con esta linea me spliteo el vector de arrays en componentes de tamaño 4 que integran 
    otra lista superior => [ [{},{},{},{}] , [{},{},{},{}] ] y asi
    */
    let dividedProjects = splitProjects(arrayOfProjects, 4); 
    /*Luego, para recortar el array en tantos componentes quiero mostrar uso slice()*/
    visibleProjects = dividedProjects.slice(0,index+1)
    /* Utilizo una funcion para concatenar las listas mostradas y poder recorrerlas con el map*/
    visibleProjects = concatenateArrays(visibleProjects);
    const html = visibleProjects.map(project =>{
        return createHtmlProjectCard(project);
    }).join("");
    projectContainer.innerHTML = html;
    return dividedProjects;
}  

function concatenateArrays(arrayOfarrays){
    let result = []
    for(let i=0; i<arrayOfarrays.length;i++){
        result = result.concat(arrayOfarrays[i])
    }
    return result;
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
    const dividedProjects = renderProjectsInProjectContainer(filterProjects);
    setCategorySelectedStyle(categoryCard);

    //me genero una variable controlador GLOBAL cada vez que ingreso a una nueva categoria
    ProjectViewController = {
        index : 0,
        limit: dividedProjects.length,
    }
    setViewMoreBtnState();
}

function setCategorySelectedStyle(categoryCard){
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

//Funciones que voy probando

function showMoreProjects(){
    //index arranca en 0 por defecto, por eso se incrementa cada vez que se presiona el boton
    ProjectViewController.index++;

    const categoryCard = categoriesCards.filter(category =>{
        return category.classList.contains("selected-category")
    })
    let filterProjects;
    if (!categoryCard.length){
        filterProjects = Projects;
    }else{
        const categoryValue = categoryCard[0].dataset.language
        filterProjects = filterProjectByTag(categoryValue);
    }
    renderProjectsInProjectContainer(filterProjects,ProjectViewController.index)
    setViewMoreBtnState()
}

function setViewMoreBtnState(){
    if (ProjectViewController.index + 1 == ProjectViewController.limit){
        showMoreProjectsBtn.style.display = "none";
    }else{
        showMoreProjectsBtn.style.display = "block";
    }
}

function openProjectUrl(event){
    event.preventDefault();
    if (!event.target.classList.contains("project-card"))return;
    const idProject = event.target.dataset.id;
    const filterProject = Projects.filter(project =>{
        return project.id == idProject
    })
    console.log(filterProject)
    const urlProject = filterProject[0].url;
    window.open(urlProject)
}

function showProjectDescription(event){
    if (!event.target.classList.contains("project-card"))return;
    const projectInfo = event.target.children[0];
    projectInfo.classList.add("translateY");
}

function hideProjectDescription(event){
    if (!event.target.classList.contains("project-card"))return;
    const projectInfo = event.target.children[0];
    projectInfo.classList.remove("translateY");
}

function showMenu(){
    navbar.classList.toggle("show-navbar");
    burguerBtn.classList.toggle("hide-menu")
}

function init(){
    renderProjectsInProjectContainer(Projects);
    setViewMoreBtnState();
    categoryContainer.addEventListener("click", selectCategory);
    showMoreProjectsBtn.addEventListener("click", showMoreProjects);
    goToPortfolioBtn.addEventListener("click", function(){window.location.href='#my-portfolio'});

    projectContainer.addEventListener("click", openProjectUrl);
    projectContainer.addEventListener("mouseover", showProjectDescription);
    projectContainer.addEventListener("mouseout", hideProjectDescription);
    burguerBtn.addEventListener("click", showMenu);
    navbar.addEventListener("click", showMenu);
    window.addEventListener("scroll", function(){
        if (navbar.classList.contains("show-navbar")){
            showMenu();
        }
    });
}

init()