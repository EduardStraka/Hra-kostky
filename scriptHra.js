//zakl.promenne
var totalScore, roundScore, activePlayer,dice, playGame;
newStart();

function newStart(){
        
totalScore = [0,0];
roundScore = 0;
activePlayer = 0;
playGame = true;    
    
     
    //vynulovani a odstraneni kostky
document.getElementById("totalScorePlayer-0").textContent=0;
document.getElementById("totalScorePlayer-1").textContent=0;
document.getElementById("currentScore-0").textContent=0;
document.getElementById("currentScore-1").textContent=0;
    
    //    skryti kostky
 document.querySelector(".diceImage").style.display="none";
    
document.querySelector("#name-0").textContent = "Skore 1.hrace";
document.querySelector("#name-1").textContent = "Skore 2.hrace";
    
     document.querySelector(".totalScore0").classList.add("active");
      document.querySelector(".totalScore1").classList.remove("active");
}

document.querySelector(".newGame").addEventListener("click",newStart);

//menime obrazek kostky podle nahodneho cisla
document.querySelector(".rollDice").addEventListener("click",function(){
    if(playGame){
        
    
//   1.generujeme nahodne c. 1-6
    var dice = Math.ceil(Math.random()*6);
//    2. zobrazit spravny obrazek
    var diceElement=document.querySelector(".diceImage");
    diceElement.style.display = "block";
    console.log(diceElement.src = "imagesHra/" + dice + ".jpg");

    //    3.nacitame cisla kostky
    if(dice !==1){
        roundScore = dice + roundScore;
        document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
        
    }else{
//        bude hrat dalsi hrac
        nextPlayer();
    }
    }
});

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    roundScore = 0;
    
    document.getElementById("currentScore-0").textContent=0;
     document.getElementById("currentScore-1").textContent=0;
    
     document.querySelector(".diceImage").style.display="none";
    
      document.querySelector(".totalScore0").classList.toggle("active");
      document.querySelector(".totalScore1").classList.toggle("active");
    
}
document.querySelector(".holdScore").addEventListener("click", function(){
    if(playGame){
        
    //    celkove skore se vyplni soucasnym skore
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
    
    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];
    
    if(totalScore [activePlayer] >= 20){
        document.querySelector("#name-" + activePlayer).textContent = "VÍTĚZ!!! VÍTĚZ!!!";
        document.querySelector(".diceImage").style.display="none";
        playGame = false;
    }else{
        nextPlayer();
    }
    }
});