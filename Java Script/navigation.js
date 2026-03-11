const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    const dropdown = item.querySelector(".nav-dropdown");

    item.addEventListener("mouseenter", () => {
        if(dropdown){
            dropdown.style.display = "block";
        }
    });

    item.addEventListener("mouseleave", () => {
        if(dropdown){
            dropdown.style.display = "none";
        }
    });

});