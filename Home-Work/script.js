let hamMenuIcon=document.getElementById("ham-mernu");
let navBar= document.getElementById("nav-bar");
let navlinks =navBar.querySelectorAll("li");

hamMenuIcon.addElentlistener("click",()=>{
    navBar.classList.toggle("active");
});

navlinks.forEach( (navlinks) => {
    navlinks.addElentlistener("click",()=>{
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    });
    
});
