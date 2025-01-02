
var r1=Math.round((Math.random()*5)+1);
var r2=Math.round((Math.random()*5)+1);
var img1=document.querySelector(".img1").setAttribute("src",`./images/dice${r1}.png`);
var img2=document.querySelector(".img2").setAttribute("src",`./images/dice${r2}.png`);
var h2=document.querySelector("h2");

if(r1===r2){
    h2.textContent="Match Draw 😑";
}
else if(r1>r2){
    h2.textContent="Player 1 wins 😏";
}
else if(r2>r1){
    h2.textContent="Player 2 wins 😎";
}
else{
    h2.textContent="Something went wrong";
}

function refreshPage() {
    location.reload();
}