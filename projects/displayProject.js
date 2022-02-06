const maxOverlayOpacity = 0.4;
const transProjectSpeed = 0.05; // Needs to be a factor of 100
const transOverlaySpeed = 0.02; // Needs to be a factor of maxOverlayOpacity

var projectOpen;
var transitionInterval;

function transition(direction) {
    proj = document.getElementById(projectOpen);
    overlay = document.getElementById("overlay");
    
    if (direction === "in") {
        if (proj.style.opacity < 1) {
            proj.style.opacity = parseFloat(proj.style.opacity) + transProjectSpeed;
        }
        if (overlay.style.opacity < maxOverlayOpacity) {
            overlay.style.opacity = parseFloat(overlay.style.opacity) + transOverlaySpeed;
        }
        else {
            clearInterval(transitionInterval);
            console.log("DONE");
        }
    } 
    
    else if (direction === "out") {
        if (proj.style.opacity > 0) {
            proj.style.opacity = parseFloat(proj.style.opacity) - transProjectSpeed;
        }
        if (overlay.style.opacity > 0) {
            overlay.style.opacity = parseFloat(overlay.style.opacity) - transOverlaySpeed;
        }
        else {
            clearInterval(transitionInterval);
            
            proj.style.display = "none";
            overlay.style.display = "none";
        }

        console.log(proj.style.opacity);
        console.log(overlay.style.opacity);
    }
}

function show(element) {
    projectOpen = element;
    var project = document.getElementById(element);
    project.style.opacity = 0;
    project.style.display = "block";
    
    var overlay = document.getElementById("overlay");
    overlay.style.opacity = 0;
    overlay.style.display = "block";
    
    transitionInterval = setInterval(transition, 4, "in");
}

function exitProject() {
    transitionInterval = setInterval(transition, 4, "out");
}