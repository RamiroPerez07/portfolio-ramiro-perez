//My projects

const Projects = [
    {
        id: 1,
        name: "Racademy Website",
        description: "Guitar lesson sales simulation",
        url: "https://racademy-zeta.vercel.app/",
        img: "./img/racademy-website.PNG",
        technologies: ["ALL", "HTML", "CSS", "JAVASCRIPT"]
    },
    {
        id: 2,
        name: "Ramusic",
        description: "Listen to the top 10 songs from different artists",
        url: "https://ramusic-music-app.vercel.app/",
        img: "./img/ramusic.PNG",
        technologies: ["ALL", "CSS", "JAVASCRIPT"]
    },
    {
        id: 3,
        name: "Nucba Zappi",
        description: "Food ecommerce - Challenge from Nucba",
        url: "https://food-market-coral.vercel.app/",
        img: "./img/nucbazappi.PNG",
        technologies: ["ALL","JAVASCRIPT"]
    },
    {
        id: 4,
        name: "Guitar Chords App",
        description: "Discover the musical nomenclature of chords starting from the position of the fingers",
        url: "https://guitar-chords-app.vercel.app/",
        img: "./img/guitar-chords.PNG",
        technologies: ["ALL","HTML", "JAVASCRIPT"]
    },
    {
        id: 5,
        name: "Nasa Image Of the Day",
        description: "Discover the astronomical image of the day",
        url: "https://nasa-images-xi.vercel.app/",
        img: "./img/nasa.PNG",
        technologies: ["ALL","JAVASCRIPT"]
    },
    {
        id: 6,
        name: "FAQ Accordion",
        description: "Challenge from Frontend Mentor",
        url: "https://faq-accordion-card-lac.vercel.app/",
        img: "./img/faq-accordion.PNG",
        technologies: ["ALL","HTML","CSS","JAVASCRIPT"]
    },
    {
        id: 7,
        name: "Sign-Up Component",
        description: "Challenge from Frontend Mentor",
        url: "https://frontend-mentor-challenge-fawn.vercel.app/",
        img: "./img/sign-up-component.PNG",
        technologies: ["ALL","HTML","CSS","JAVASCRIPT"]
    },
    {
        id: 8,
        name: "Buyer´s App",
        description: "Application for professional buyers",
        url: "https://buyer-s-app.vercel.app/",
        img: "./img/buyerapp.PNG",
        technologies: ["ALL","HTML","CSS","JAVASCRIPT"]
    },
    {
        id: 9,
        name: "Calculator",
        description: "Calculator for simple mathematical operations between two numbers",
        url: "https://calculadora-ramiperez.vercel.app/",
        img: "./img/calculator.PNG",
        technologies: ["ALL","JAVASCRIPT"]
    },
    {
        id: 10,
        name: "Dragon Ball Super Pics",
        description: "Images and information about the characters of Dragon Ball Super",
        url: "https://dragon-ball-super-app.vercel.app/",
        img: "./img/dragonballpics.PNG",
        technologies: ["ALL","JAVASCRIPT"]
    },
]


// For button "View more"

//Esta funcion me genera un nuevo array donde cada componente tendra otro array del tamaño solicitado
const splitProjects = (arrayOfObjects, size) => {
    let dividedProjects = [];
    for (let i = 0; i < arrayOfObjects.length; i = i + size) 
        dividedProjects.push(arrayOfObjects.slice(i, i + size));
    return dividedProjects;
};


  
