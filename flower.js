onload = () =>{
    document.body.classList.remove("flower_container");
};
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

