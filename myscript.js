// Smooth scroll to contact section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form submit event
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Your message has been sent!");
});
