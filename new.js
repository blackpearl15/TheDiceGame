var randomNumber1 = Math.random();

randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();

randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var s = "images/dice1.png";

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

var chr = randomNumber1.toString();
var ans1 = setCharAt(s,11,chr);


chr = randomNumber2.toString();
var ans2 = setCharAt(s,11,chr);


var winner = "Player1 Wins";
if(randomNumber1 < randomNumber2){
   winner = setCharAt(winner,6,'2');
}
else {
  winner = "Draw";
}



document.querySelector(".img1").setAttribute("src",ans1);

document.querySelector(".img2").setAttribute("src",ans2);

document.querySelector("h1").innerHTML = winner;
