const track = document.getElementById("notice-track");

let position = 0;
let speed = 0.5;
let paused = false;

function animate(){

    if(!paused){
        position -= speed;

        if(Math.abs(position) > track.scrollWidth / 2){
            position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(animate);
}

animate();

/* buttons */

function nextNotice(){
    position -= 150;
}

function prevNotice(){
    position += 150;
}

/* hover pause */

track.addEventListener("mouseenter",()=>{
    paused = true;
});

track.addEventListener("mouseleave",()=>{
    paused = false;
});