var projectOpen;

function show(element) {
    projectOpen = element;
    var project = document.getElementById(element);
    var overlay = document.getElementById("overlay");
    
    project.style.display = "block";
    overlay.style.display = "block";
    
    project.classList.add("proj-fade");
    overlay.classlist.add("overlay-fade");
    
    project.addEventListener("animationend", function() {
        project.classList.remove("proj-fade");
        overlay.classList.remove("overlay-fade");
    }, { once: true });
}

function exitProject() {
    var project = document.getElementById(projectOpen);
    var overlay = document.getElementById("overlay");
   
    project.classList.add("out");
    overlay.classList.add("out");
    
    project.addEventListener("animationend", function() {
        project.classList.remove("out");
        overlay.classList.remove("out");
        
        project.style.display = "none";
        overlay.style.display = "none";
    }, { once: true });
}