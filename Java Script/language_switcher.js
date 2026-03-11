const btn = document.querySelector(".lang-btn");
const dropdown = document.querySelector(".lang-dropdown");

btn.addEventListener("click", () => {
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});