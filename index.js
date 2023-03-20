document.querySelector("button").onclick= jugar;
function jugar(){

var randomNumer1=Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumer1 + ".png")

var randomNumer2=Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumer2 + ".png")

if (randomNumer1 > randomNumer2){
    document.querySelector("h1").textContent="Player 1 WIN!"

}else if (randomNumer1 == randomNumer2) {
    document.querySelector("h1").textContent="It is a tie!"
}else {
    document.querySelector("h1").textContent="Player 2 WIN!"
}

}

