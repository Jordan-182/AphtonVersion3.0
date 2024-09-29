//  GESTION DU RESPONSIVE DE LA NAV //

const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click" , toggleNav)

new ResizeObserver(entries =>{
    if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"}
    else{navLinksContainer.style.transition = "none"}
}).observe(document.body)

// ------------------------------- //

document.querySelector('.nav-contact').addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // Récupère l'ID cible
    const targetSection = document.getElementById(targetId); // Récupère la section cible

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    if(navLinksContainer.classList.contains('open')){
        navLinksContainer.classList.remove('open');
        hamburgerToggler.classList.toggle("open");
    };
});