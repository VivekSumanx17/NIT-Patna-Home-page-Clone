let images = [
    "MainEntrance.webp",
    "MainBuilding.webp",
    "nit-patna-004.jpg"
];

let index = 0;

function showSlide(){
    const img = document.getElementById("slide-image");

    img.style.opacity = 0;
    img.style.transform = "translateX(50px)";

    setTimeout(() => {
        img.src = images[index];
        img.style.opacity = 1;
        img.style.transform = "translateX(0)";
    }, 200);
}
showSlide(); 

let slider = setInterval(nextSlide, 4000);

function nextSlide(){
    clearInterval(slider);
    index = (index + 1) % images.length;
    showSlide();
    slider = setInterval(nextSlide, 4000);
}

function prevSlide(){
    clearInterval(slider);
    index = (index - 1 + images.length) % images.length;
    showSlide();
    slider = setInterval(nextSlide, 4000);
}