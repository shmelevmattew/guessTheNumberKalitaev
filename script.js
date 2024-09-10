"use strict";

const max = 50
const min = 1

let secretNumber = Math.trunc(Math.random() * max) + min; 
let score = 1;
let highscore = 0;
let notVerySmartUser = false;

let quessText = document.querySelector(".guessText")

const displayMessage = function(message){
    quessText.textContent = message;
}


document.querySelector(".check").addEventListener("click", function(){ 
    const guess = Number(document.querySelector(".guess").value); 

    //if the user does not provide a number
    if(!guess){
        displayMessage("Не пытайся поломать программу, сперва введи число не равное нулю  :("); 
    }
    

    else if(guess === secretNumber){ 
        displayMessage(notVerySmartUser? "Я удвилен как ты это сделал, но ты выйграл":"Ты выйграл"); 
        document.querySelector(".guessText").style.color = "white";
        document.querySelector(".centerDIV").style.backgroundColor = "green"; 
        
        if(score > highscore){ 
            highscore = score;
            document.querySelector(".highscore").textContent = highscore; 
        }
    }

    else if(guess !== secretNumber){ 
        if(score > 1){
            if (guess > max || guess < min){
                if (notVerySmartUser){
                    displayMessage("Я отказываюсь это комментировать...");
                    score--; 
                }else{
                    displayMessage("Ты вообще понял правила? На первый раз прощу, потом спишу попытку");
                    notVerySmartUser = true;
                }
            }else{
                displayMessage(guess > secretNumber ? "Беда! Число меньше" :  "Беда! Число больше");
                score--; 
            }
            document.querySelector(".score").textContent = score;
        }
        else{
            displayMessage(`Полная беда! Ты с треском проиграл , правильное число было ${secretNumber}`);
            document.querySelector(".centerDIV").style.backgroundColor = "red"; 
            document.querySelector(".score").textContent = 0;
        }
    }


    document.querySelector(".again").addEventListener("click", function(){
        secretNumber = Math.trunc(Math.random() * 20) + 1; 
        score = 20;
        document.querySelector(".score").textContent = score; 
        document.querySelector(".guessText").textContent = "Ну давай, вводи предположения...."; 
        document.querySelector(".guess").value = "";
        document.querySelector(".centerDIV").style.backgroundColor = "#c8b7a6"; 
        document.querySelector(".guessText").style.color = "black";

    })
})
