const maxOverlayOpacity = 40;
const transProjectSpeed = 5; // Needs to be a factor of 100
const transOverlaySpeed = 2; // Needs to be a factor of maxOverlayOpacity

var projectOpen;
var transitionInterval;

function transition(direction) {
    proj = document.getElementById(projectOpen);
    overlay = document.getElementById("overlay");
    
    if (direction === "in") {
        if (element.style.opacity < 100) {
            element.style.opacity += transProjectSpeed;
        }
        if (overlay.style.opacity < maxOverlayOpacity) {
            overlay.style.opacity -= transOverlaySpeed;
        }
        else {
            clearInterval(transitionInterval);
        }
    } 
    
    else if (direction === "out") {
        if (element.style.opacity > 0) {
            element.style.opacity -= transProjectSpeed;
        }
        if (overlay.style.opacity > 0) {
            overlay.style.opacity -= transOverlaySpeed;
        }
        else {
            clearInterval(transitionInterval);
        }
    }
}

function show(element) {
    projectOpen = element;
    var project = document.getElementById(element);
    // project.style.opacity = 0;
    project.style.display = "block";
    
    var overlay = document.getElementById("overlay");
    // overlay.style.opacity = 0;
    overlay.style.display = "block";
    
    // transitionInterval = setInteveral(transition, 100, "in");
}

function exitProject() {
    document.getElementById(projectOpen).style.display = "none";
    document.getElementById("overlay").style.display = "none";
}