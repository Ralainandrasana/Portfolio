var home = document.getElementById("home");
var skills = document.getElementById("skills");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var ctct = document.getElementById("ctct");

var HOME = document.querySelector(".home");
var SKILLS = document.querySelector(".skills");
var PROJECTS = document.querySelector(".projects");
var CONTACT = document.querySelector(".contact");
var talk = document.querySelector(".talk");
var adrMail = document.querySelector(".adrMail");

home.style.color = "#00acf2";

home.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    home.style.color = "#00acf2";
    skills.style.color = "#ffffff";
    projects.style.color = "#ffffff";
    contact.style.color = "#ffffff";
});


skills.addEventListener("click", function(){
    window.scrollTo({top: window.scrollY+SKILLS.getBoundingClientRect().y, behavior: 'smooth'});
    home.style.color = "#ffffff";
    skills.style.color = "#00acf2";
    projects.style.color = "#ffffff";
    contact.style.color = "#ffffff";
});
projects.addEventListener("click", function(){
    window.scrollTo({top: window.scrollY+PROJECTS.getBoundingClientRect().y, behavior: 'smooth'});
    home.style.color = "#ffffff";
    skills.style.color = "#ffffff";
    projects.style.color = "#00acf2";
    contact.style.color = "#ffffff";
});


contact.addEventListener("click", function(){
    window.scrollTo({top: 5000, behavior: 'smooth'});
    home.style.color = "#ffffff";
    skills.style.color = "#ffffff";
    projects.style.color = "#ffffff";
    contact.style.color = "#00acf2";
});

talk.addEventListener("click", function(){
    window.scrollTo({top: 5000, behavior: 'smooth'});
    home.style.color = "#ffffff";
    skills.style.color = "#ffffff";
    projects.style.color = "#ffffff";
    contact.style.color = "#00acf2";
    setTimeout((
    )=>{
        adrMail.focus();
    },500);
});

window.addEventListener("scroll", function(){
    //console.log(window.scrollY+", "+SKILLS.getBoundingClientRect().y)
    console.log(PROJECTS.getBoundingClientRect().y)
    if(400 >= Math.floor(window.scrollY)){
        home.style.color = "#00acf2";
    skills.style.color = "#ffffff";
    projects.style.color = "#ffffff";
    contact.style.color = "#ffffff";
    }
    else if(Math.floor(SKILLS.getBoundingClientRect().y) >= -20 && 20 >= SKILLS.getBoundingClientRect().y){
        home.style.color = "#ffffff";
    skills.style.color = "#00acf2";
    projects.style.color = "#ffffff";
    contact.style.color = "#ffffff";
    }
    else if(Math.floor(PROJECTS.getBoundingClientRect().y) >= -20 && 20 >= PROJECTS.getBoundingClientRect().y){
        home.style.color = "#ffffff";
    skills.style.color = "#ffffff";
    projects.style.color = "#00acf2";
    contact.style.color = "#ffffff";
    }
    else if(Math.floor(300 >= ctct.getBoundingClientRect().y)){
        
        home.style.color = "#ffffff";
    skills.style.color = "#ffffff";
    projects.style.color = "#ffffff";
    contact.style.color = "#00acf2";
    }
});
