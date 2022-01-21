const mario = document.getElementById("mario");
const mushroom = document.getElementById("mushroom");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (mario.classList !="jump" ) {
        mario.classList.add("jump")
    }
    setTimeout( function() {
        mario.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let marioTop = parseInt (window.getComputedStyle(mario).getPropertyValue("top"));
    let mushroomLeft = parseInt (window.getComputedStyle(mushroom).getPropertyValue("left"));

    if (mushroomLeft < 50 && mushroomLeft > 0 && marioTop >= 140) {
        alert("GAME OVER!!!")
    }
}, 10)
    
